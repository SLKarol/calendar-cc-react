import React from 'react';
import PropTypes from 'prop-types';
import './Hour.css';

/**
 * @method Week/Hour
 * @description Вывод ячейки "Час" в представлении "Неделя".<br>
 * Компонент помещается в div.calendar__grid-column calendar__day-weekX.calendar__grid-rowYY
 *
 * @param {Object} props
 * @param {number} props.dayInWeek День недели
 * @param {number} props.hourInDay Час
 * @param {object} props.event Событие в этот час. См. README
 */
function Hour({ dayInWeek, hourInDay, event = {} }) {
  let className = `calendar__hour calendar__hour--h${hourInDay} calendar__day-week${dayInWeek}`;

  if (Object.keys(event).length === 0) {
    return <div className={className}></div>;
  }
  const { duration, name } = event;

  const style = {
    gridColumnStart: dayInWeek,
    gridColumnEnd: dayInWeek,
    gridRowStart: hourInDay + 1,
    gridRowEnd: hourInDay + duration + 1
  };

  return (
    <div className={className} style={style}>
      <div className='test-col'>
        <strong>{name}</strong>
      </div>
    </div>
  );
}

Hour.propTypes = {
  dayInWeek: PropTypes.number,
  hourInDay: PropTypes.number.isRequired
};

export default Hour;
