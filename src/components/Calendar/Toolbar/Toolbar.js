import React from 'react';
import PropTypes from 'prop-types';
import SelectPeriod from './SelectPeriod';
import ChangeDatetimeStamp from './ChangeDatetimeStamp';
import AdditionalButtons from './AdditionalButtons';
import { VIEW_MODE } from '../consts';
import './toolbar.css';

/**
 * Заголовок календаря
 * @param {Object} prop
 * @param {Object} prop.currentDateTimeStamp Текущая дата
 * @param {string} prop.viewMode Выбранное представление
 * @param {Function} prop.handleChangeViewMode Обработчик смены представления
 * @param {Function} prop.handleChangeDtStamp Обработчик смены дня в каледнаре
 * @param {Function} prop.handleChangeDtStampToDay обработчик команды "Сделать вкалендаре текущий день"
 */
function Toolbar({
  currentDateTimeStamp,
  viewMode = VIEW_MODE.MONTH,
  handleChangeViewMode,
  handleChangeDtStamp,
  handleChangeDtStampToDay,
  AddComponent
}) {
  return (
    <div className='calendar__toolbar'>
      <SelectPeriod
        viewMode={viewMode}
        handleChangeViewMode={handleChangeViewMode}
      />
      <ChangeDatetimeStamp
        currentDateTimeStamp={currentDateTimeStamp}
        handleChangeDtStamp={handleChangeDtStamp}
        viewMode={viewMode}
      />
      <AdditionalButtons
        handleChangeDtStampToDay={handleChangeDtStampToDay}
        AddComponent={AddComponent}
      />
    </div>
  );
}

Toolbar.propTypes = {
  viewMode: PropTypes.oneOf(Object.values(VIEW_MODE)),
  handleChangeViewMode: PropTypes.func.isRequired,
  currentDateTimeStamp: PropTypes.string.isRequired,
  handleChangeDtStamp: PropTypes.func,
  handleChangeDtStampToDay: PropTypes.func,
  AddComponent: PropTypes.elementType
};
export default Toolbar;
