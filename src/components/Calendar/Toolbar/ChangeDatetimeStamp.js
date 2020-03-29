import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import TextDateStamp from './TextDateStamp';
import { ARROW_CHANGE_STAMP, VIEW_MODE } from '../consts';

/**
 * Компонент смены текущего дня/недели/месяца в календаре
 * @param {Object} props - React PropTypes
 * @property {string} viewMode - Режим представления данных
 * @property {Object} currentDateTimeStamp - День в каледаре
 * @property {Function} handleChangeDtStamp - Обработчик смены даты
 */
class ChangeDatetimeStamp extends Component {
  static propTypes = {
    viewMode: PropTypes.oneOf(Object.values(VIEW_MODE)),
    currentDateTimeStamp: PropTypes.string.isRequired,
    handleChangeDtStamp: PropTypes.func
  };

  /**
   * Изменить дату в календаре
   * @method
   * @summary Вызывает из пропсов метод для изменения даты
   * @param {object} e - Событие
   */
  handleChangeDtStamp = e => {
    const dataset = Object.assign(
      {},
      e.target.dataset,
      e.currentTarget.dataset
    );
    const { handleChangeDtStamp } = this.props;
    handleChangeDtStamp && handleChangeDtStamp(dataset.change);
  };

  render() {
    const { currentDateTimeStamp, viewMode } = this.props;
    return (
      <div className='calendar__сhange-datetime-stamp'>
        <button
          className='calendar__button calendar__button-arrow'
          onClick={this.handleChangeDtStamp}
          data-change={ARROW_CHANGE_STAMP.PREV}
        >
          <Arrow className='calendar__icon' />
        </button>
        <TextDateStamp
          currentDateTimeStamp={currentDateTimeStamp}
          viewMode={viewMode}
        />
        <button
          className='calendar__button calendar__button-arrow'
          onClick={this.handleChangeDtStamp}
          data-change={ARROW_CHANGE_STAMP.NEXT}
        >
          <Arrow className='calendar__icon calendar__icon--rotate180' />
        </button>
      </div>
    );
  }
}

export default ChangeDatetimeStamp;
