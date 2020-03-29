import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import HoursInDay from '../lib/HoursInDay';
import Hour from './Hour';

/**
 * @method Day/Grid
 * @description Вывод часов в календаре в представлении "День"
 * @param {Object} props Пропсы
 * @param {object} props.currentDateTimeStamp Текущий день в календаре
 * @param {string} props.selectedDate Выбранный день
 * @param {function} props.onDateClick  Обработчик нажатия на день в календаре
 * @param {function} props.HourComponent Компонент отображения часов в дне.
 * @param {Array} props.events Массив событий
 */
function Grid({
  currentDateTimeStamp,
  selectedDate,
  onDateClick,
  HourComponent = Hour,
  events
}) {
  const cellDateTime = moment(currentDateTimeStamp).startOf('date');
  const content = [];
  for (let hourInDay = 0; hourInDay < 24; hourInDay++) {
    const event = events.find(e =>
      moment(e.dateEvent).isSame(cellDateTime, 'hour')
    );
    content.push(
      <HourComponent
        key={cellDateTime}
        hourInDay={hourInDay}
        event={event}
        ISOString={cellDateTime.toISOString()}
      />
    );
    cellDateTime.add(1, 'h');
  }
  return (
    <div className='calendar__body'>
      <div className='calendar__month'>
        <HoursInDay />
        <div className='calendar__data-hours calendar__data-hours--day'>
          {content}
        </div>
      </div>
    </div>
  );
}

Grid.propTypes = {
  currentDateTimeStamp: PropTypes.string.isRequired,
  selectedDate: PropTypes.string,
  onDateClick: PropTypes.func.isRequired,
  HourComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.elementType
  ])
};

export default Grid;
