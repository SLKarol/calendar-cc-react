import React from "react";
import PropTypes from "prop-types";
import NumberDay from "../NumberDay/NumberDay";

/**
 * @method Month/Day
 * @description Вывод дня месяца
 * @param {Object} props Параметры
 * @param {boolean} props.visible Этот день показывать?
 * @param {boolean} props.selected Этот день выбран?
 * @param {string} props.ISOString День в нотации ISOString
 * @param {boolean} props.isToday Это сегодняшний день?
 */
function Day({ visible = true, selected = false, ISOString, isToday }) {
  if (!visible) {
    return null;
  }
  const day = new Date(ISOString).getDate();
  return (
    <NumberDay
      isSelected={selected}
      isToday={isToday}
      className="calendar__number--month"
    >
      {day}
    </NumberDay>
  );
}

Day.propTypes = {
  visible: PropTypes.bool,
  ISOString: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  isToday: PropTypes.bool
};
export default Day;
