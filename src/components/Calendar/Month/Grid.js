import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from './Day';

/**
 * @method Month/Grid
 * @description Вывод дней в календаре в представлении "Месяц"
 * @param {Object} props
 * @param {object} props.currentDateTimeStamp Текущий день в календаре
 * @param {string} props.selectedDate Выбранный день
 * @param {function} props.onDateClick  Обработчик нажатия на день в календаре
 * @param {function} props.ComponentDay Компонент отображения дня. Компонент помещается в div.calendar__col.calendar__cell-month .
 *  Пропсы см. в Day
 */
function Grid({
  currentDateTimeStamp,
  selectedDate,
  onDateClick,
  ComponentDay = Day
}) {
  const monthStart = moment(currentDateTimeStamp)
    .startOf('month')
    .toDate();
  const momentcurrentDateTimeStamp = moment(currentDateTimeStamp);
  const monthEnd = momentcurrentDateTimeStamp.endOf('month').toDate();
  const startDate = moment(monthStart)
    .startOf('week')
    .toDate();
  const endDate = moment(monthEnd)
    .endOf('week')
    .toDate();
  const rows = [];

  let days = [];
  let day = startDate;
  let currentDateDay = null;
  const momentSelectedDate = moment(selectedDate);
  //--- Сегодняшний день
  const todayDayString = new Date().toDateString();

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      currentDateDay = day.getDate();
      const dayISOString = day.toISOString();
      const inMonth = momentcurrentDateTimeStamp.isSame(dayISOString, 'month');
      const selected = momentSelectedDate.isSame(dayISOString, 'day');
      const classNameConainer =
        'calendar__col calendar__cell-month' +
        (!inMonth ? ' calendar__cell-month--disabled' : '');

      days.push(
        <div
          key={dayISOString}
          className={classNameConainer}
          data-day={dayISOString}
          data-day-enabled={inMonth}
          onClick={onDateClick}
        >
          <ComponentDay
            key={dayISOString}
            visible={inMonth}
            selected={selected}
            ISOString={dayISOString}
            isToday={todayDayString === day.toDateString()}
          ></ComponentDay>
        </div>
      );
      day.setDate(currentDateDay + 1);
    }
    rows.push(
      <div className='calendar__row calendar__row--month' key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className='calendar__body'>{rows}</div>;
}

Grid.propTypes = {
  currentDateTimeStamp: PropTypes.string.isRequired,
  selectedDate: PropTypes.string,
  onDateClick: PropTypes.func.isRequired,
  ComponentDay: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.elementType
  ])
};

export default Grid;
