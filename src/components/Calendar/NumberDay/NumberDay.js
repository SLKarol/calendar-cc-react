import React from "react";
import PropTypes from "prop-types";
import "./NumberDay.css";

/**
 * Выводит число (номер дня в месяце)
 * @param {Object} props Пропсы
 * @param {boolean} props.isToday Это сегодняшний день?
 * @param {boolean} props.isSelected Этот день выбран?
 * @param {className} props.className **Дополнительный** css-класс. Он не прибавляется к текущему классу, а не заменяет его.
 */
function NumberDay({ isToday, isSelected, className = "", children }) {
  let numberName = `calendar__number ${className}`;
  if (isToday) {
    numberName += " calendar__number--today";
  }
  if (isSelected) {
    numberName += " calendar__number--selected";
  }

  return <span className={numberName}>{children}</span>;
}

NumberDay.propTypes = {
  isToday: PropTypes.bool,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default NumberDay;
