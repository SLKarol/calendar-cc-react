import React from 'react';
import PropTypes from 'prop-types';

/**
 * @method Day/Hour
 * @description Показать час в представлении "День"
 * @param {Object} props Пропсы
 * @param {number} props.hourInDay  Номер часа
 * @param {object} props.event  Событие
 */
function Hour({ hourInDay = 1, event = {} }) {
  let className = `calendar__hour calendar__hour--h${hourInDay} calendar__day-week1`;

  if (Object.keys(event).length === 0) {
    return <div className={className}></div>;
  }
  const { duration, name } = event;

  const style = {
    gridColumnStart: 1,
    gridColumnEnd: 2,
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
  hourInDay: PropTypes.number
};

export default Hour;
