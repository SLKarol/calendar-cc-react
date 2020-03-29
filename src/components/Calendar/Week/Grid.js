import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import HoursInDay from '../lib/HoursInDay';
import Hour from './Hour';

/**
 * @method Week/Grid
 * @description Вывод дней в календаре в представлении "Неделя"
 * @param {Object} props
 * @param {object} props.currentDateTimeStamp Текущий день в календаре
 * @param {string} props.selectedDate Выбранный день
 * @param {function} props.onDateClick  Обработчик нажатия на день в календаре
 * @param {function} props.HourComponent Компонент отображения часа.
 */
function Grid({
  currentDateTimeStamp,
  selectedDate,
  onDateClick,
  HourComponent = Hour,
  events
}) {
  const cellDateTime = moment(currentDateTimeStamp)
    .startOf('week')
    .startOf('date');
  const content = [];
  for (let dayInWeek = 1; dayInWeek < 8; dayInWeek++) {
    for (let hourInDay = 0; hourInDay < 24; hourInDay++) {
      const event = events.find(e =>
        moment(e.dateEvent).isSame(cellDateTime, 'hour')
      );
      content.push(
        <HourComponent
          key={cellDateTime}
          dayInWeek={dayInWeek}
          hourInDay={hourInDay}
          event={event}
          ISOString={cellDateTime.toISOString()}
        />
      );
      cellDateTime.add(1, 'h');
    }
  }
  return (
    <div className='calendar__body'>
      <div className='calendar__month'>
        <HoursInDay />
        <div className='calendar__data-hours'>{content}</div>
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
