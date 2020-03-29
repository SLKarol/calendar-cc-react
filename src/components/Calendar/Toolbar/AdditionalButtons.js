import React from "react";
import PropTypes from "prop-types";

/**
 * Вывод дополнительных кнопок в тулбаре
 * @param {Object} props Пропсы
 * @param {Function} props.handleChangeDtStampToDay Обработка нажатия на кнопку "Сегодня"
 * @param {Function} props.AddComponent Дополнительный компонент. Возможно это кнопка "Добавить событие"
 */
const AdditionalButtons = ({ handleChangeDtStampToDay, AddComponent }) => {
  return (
    <div className="calendar__additional-buttons">
      <button
        className="calendar__button calendar__button-tolbar"
        onClick={handleChangeDtStampToDay}
      >
        Сегодня
      </button>
      {AddComponent && <AddComponent />}
    </div>
  );
};

AdditionalButtons.propTypes = {
  handleChangeDtStampToDay: PropTypes.func.isRequired,
  AddComponent: PropTypes.elementType
};

export default AdditionalButtons;
