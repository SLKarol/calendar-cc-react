import React from "react";
import PropTypes from "prop-types";
import { VIEW_MODE } from "../consts";

/**
 * Выбор представления календаря
 * @param {object} props Пропсы
 * @param {string} props.viewMode  Режим представления
 * @param {function}  props.handleChangeViewMode  Обработчик смены отображения
 */
function SelectPeriod({ viewMode = VIEW_MODE.MONTH, handleChangeViewMode }) {
  const OnClick = e =>
    handleChangeViewMode && handleChangeViewMode(e.target.value);

  return (
    <div className="calendar__select-period">
      <label className="calendar__period-item">
        <input
          type="radio"
          name="period"
          value={VIEW_MODE.DAY}
          className="calendar__radio"
          checked={viewMode === VIEW_MODE.DAY}
          onChange={OnClick}
        />
        <span className="calendar__period-name">День</span>
      </label>
      <label className="calendar__period-item">
        <input
          type="radio"
          name="period"
          value={VIEW_MODE.WEEK}
          className="calendar__radio"
          onChange={OnClick}
          checked={viewMode === VIEW_MODE.WEEK}
        />
        <span className="calendar__period-name">Неделя</span>
      </label>
      <label className="calendar__period-item">
        <input
          type="radio"
          name="period"
          value={VIEW_MODE.MONTH}
          className="calendar__radio"
          onChange={OnClick}
          checked={viewMode === VIEW_MODE.MONTH}
        />
        <span className="calendar__period-name">Месяц</span>
      </label>
    </div>
  );
}

SelectPeriod.propTypes = {
  viewMode: PropTypes.string,
  handleChangeViewMode: PropTypes.func
};

export default SelectPeriod;
