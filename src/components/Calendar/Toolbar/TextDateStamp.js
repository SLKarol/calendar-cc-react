import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { VIEW_MODE } from '../consts';
import { jsUcfirst } from '../lib';

/**
 * Вывод текущего дня
 * @param {Object} props Пропсы
 * @param {string} props.currentDateTimeStamp Текущий день в календаре
 * @param {string} props.viewMode Pежим представления
 */
function TextDateStamp({ currentDateTimeStamp, viewMode = VIEW_MODE.MONTH }) {
  const momentCurrentDay = moment(currentDateTimeStamp);
  const firstLineText =
    viewMode === VIEW_MODE.DAY
      ? momentCurrentDay.format('D MMMM')
      : jsUcfirst(`${momentCurrentDay.format('MMMM YYYY')} г.`);
  const SecondLine =
    viewMode === VIEW_MODE.DAY ? (
      <span className='calendar__current-stamp--no-bold'>{`${momentCurrentDay.format(
        'YYYY'
      )} г.`}</span>
    ) : null;
  return (
    <div className='calendar__col calendar__col--center calendar__current-stamp'>
      <span className='calendar__col--first-letter'>{firstLineText}</span>
      {SecondLine}
    </div>
  );
}

TextDateStamp.propTypes = {
  currentDateTimeStamp: PropTypes.string.isRequired,
  viewMode: PropTypes.oneOf(Object.values(VIEW_MODE))
};

export default TextDateStamp;
