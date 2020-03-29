import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import NumberDay from '../NumberDay/NumberDay';
import './Header.css';

/**
 * @method Week/Header
 * @description Вывод заголовков дней в неделе
 * @param {Object} props
 * @param {object} props.currentDateTimeStamp Текущий день в календаре
 * @param {string} props.selectedDate Выбранный день
 * @param {function} props.onToolbarDayClick Обработчик выбора дня в тулбаре
 */
function Header({ currentDateTimeStamp, selectedDate, onToolbarDayClick }) {
  const days = [];
  const momentCurrentDateStamp = moment(currentDateTimeStamp);
  //--- Получить первый день недели
  const dayInWeek = momentCurrentDateStamp.startOf('week');
  let i = 0;
  //---
  while (i < 7) {
    const nameDayWeek = dayInWeek.format('dd, '); // пн. вт. и т.п.
    const numbDay = dayInWeek.format('D'); // номер дня

    days.push(
      <div className='calendar__day-week' key={nameDayWeek + numbDay}>
        <button
          className='calendar__button-header'
          onClick={onToolbarDayClick}
          data-day={dayInWeek.toISOString()}
        >
          {nameDayWeek}
          <NumberDay
            isToday={dayInWeek.isSame(moment(), 'day')}
            isSelected={dayInWeek.isSame(moment(selectedDate), 'day')}
          >
            {numbDay}
          </NumberDay>
        </button>
      </div>
    );
    i++;
    dayInWeek.add(1, 'days');
  }
  return (
    <div className='calendar__days calendar__week-days'>
      <div className='calendar__info-column'></div>
      {days}
    </div>
  );
}

Header.propTypes = {
  currentDateTimeStamp: PropTypes.string.isRequired,
  selectedDate: PropTypes.string,
  onToolbarDayClick: PropTypes.func.isRequired
};

export default Header;
