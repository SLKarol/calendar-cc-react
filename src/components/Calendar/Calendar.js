import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Month from './Month';
import Week from './Week';
import Day from './Day';
import Toolbar from './Toolbar/Toolbar';
import { VIEW_MODE, ARROW_CHANGE_STAMP } from './consts';

/**
 * Компонент для отображения календаря по месяцам, неделям, дням
 * @namespace Calendar
 * @param {Object} props - React PropTypes
 * @param {Array} props.events - Набор событий для показа в календаре (см. README)
 * @param {Array} props.components - Кастомные компоненты (см. README)
 * @param {string} props.currentDateTimeStamp Текущий день в календаре
 * @param {boolean} props.isSelectedDate Выбрал день в календаре? По умолчанию нет
 * @param {string} props.viewMode Режим представления данных
 * @param {function} props.selectDate Обработчик выбора дня. Параметр: day, тип: string
 * @param {function} props.changeViewMode Обработчик выбора режима представления
 *
 * @example
 *  const events = [
 *    {
 *     id: 1,
 *     dateEvent: new Date(),
 *     duration: 2,
 *     name: "Митинг",
 *     datas: [1, 2, 3, 4, 5]
 *   }
 *];
 * return (
 *   <Calendar events={size} />
 * )
 */
class Calendar extends Component {
  static propTypes = {
    events: PropTypes.array,
    components: PropTypes.object,
    currentDateTimeStamp: PropTypes.string,
    isSelectedDate: PropTypes.bool,
    viewMode: PropTypes.string,
    selectDate: PropTypes.func.isRequired,
    changeViewMode: PropTypes.func.isRequired
  };

  /**
   * Изменить выбранную дату в календаре
   * @method
   * @param {object} e - Событие
   */
  onDateClick = e => {
    const dataset = Object.assign(
      {},
      e.target.dataset,
      e.currentTarget.dataset
    );
    const { day, dayEnabled } = dataset;
    if (dayEnabled) {
      this.props.selectDate(day);
    }
  };

  /**
   * Кликнул по дню в тулбаре
   * @method
   * @param {object} e - Событие
   */
  onToolbarDayClick = e => {
    const dataset = Object.assign(
      {},
      e.target.dataset,
      e.currentTarget.dataset
    );
    const { day } = dataset;
    this.props.selectDate(day);
  };

  /**
   * Изменить режим представления данных
   * @method
   * @param {string} viewMode Одно из: MONTH, WEEK, DAY
   */
  handleChangeViewMode = viewMode => this.props.changeViewMode(viewMode);

  /**
   * Обработка нажатия на управляющие стрелки ("Назад", "Вперёд")
   * @method
   * @param {string} viewMode Одно из: PREV, NEXT
   */
  handleChangeDtStamp = arrow => {
    const { selectDate, viewMode } = this.props;
    //--- Получить текущий день в календаре
    const currentDateTimeStamp = new Date(this.props.currentDateTimeStamp);
    //--- Что изменяем: Месяц, Неделю, день? - Зависит от state.viewMode
    let changeData;
    switch (viewMode) {
      //--- Для дня изменить 1 день в календаре
      case VIEW_MODE.DAY: {
        changeData =
          arrow === ARROW_CHANGE_STAMP.PREV
            ? moment(currentDateTimeStamp).add(-1, 'days')
            : moment(currentDateTimeStamp).add(1, 'days');
        currentDateTimeStamp.setTime(1 * changeData.utc().format('x'));
        break;
      }
      //--- Для недели изменить 7 дней
      case VIEW_MODE.WEEK: {
        changeData =
          arrow === ARROW_CHANGE_STAMP.PREV
            ? moment(currentDateTimeStamp).add(-7, 'days')
            : moment(currentDateTimeStamp).add(7, 'days');
        currentDateTimeStamp.setTime(1 * changeData.utc().format('x'));
        break;
      }
      //--- Для месяца изменить месяц
      default: {
        changeData =
          arrow === ARROW_CHANGE_STAMP.PREV
            ? currentDateTimeStamp.getMonth() - 1
            : currentDateTimeStamp.getMonth() + 1;
        currentDateTimeStamp.setMonth(changeData);
        break;
      }
    }
    //--- изменить точно так же и выбранный день
    selectDate(currentDateTimeStamp.toISOString());
  };

  /**
   * Изменить календаре текущий день
   * @method
   */
  handleChangeDtStampToDay = () => {
    const currentDateTimeStamp = new Date();
    this.props.selectDate(currentDateTimeStamp.toISOString());
  };

  render() {
    const {
      events = [],
      components = {},
      currentDateTimeStamp,
      isSelectedDate,
      viewMode
    } = this.props;
    const { AddToolbar, DayMoth, HourInWeek, HoursInDay } = components;
    const selectedDate = isSelectedDate ? currentDateTimeStamp : null;

    let Content = null;
    if (viewMode === VIEW_MODE.MONTH) {
      Content = (
        <>
          <Month.Header />
          <Month.Grid
            currentDateTimeStamp={currentDateTimeStamp}
            selectedDate={selectedDate}
            onDateClick={this.onDateClick}
            ComponentDay={DayMoth}
            events={events}
          />
        </>
      );
    }
    if (viewMode === VIEW_MODE.WEEK) {
      Content = (
        <>
          <Week.Header
            currentDateTimeStamp={currentDateTimeStamp}
            selectedDate={selectedDate}
            onToolbarDayClick={this.onToolbarDayClick}
          />
          <Week.Grid
            currentDateTimeStamp={currentDateTimeStamp}
            selectedDate={selectedDate}
            onDateClick={this.onDateClick}
            HourComponent={HourInWeek}
            events={events}
          />
        </>
      );
    }
    if (viewMode === VIEW_MODE.DAY) {
      Content = (
        <>
          <Week.Header
            currentDateTimeStamp={currentDateTimeStamp}
            selectedDate={selectedDate}
            onToolbarDayClick={this.onToolbarDayClick}
          />
          <Day.Grid
            currentDateTimeStamp={currentDateTimeStamp}
            selectedDate={selectedDate}
            onDateClick={this.onDateClick}
            HourComponent={HoursInDay}
            events={events}
          />
        </>
      );
    }
    return (
      <div className='calendar'>
        <Toolbar
          currentDateTimeStamp={currentDateTimeStamp}
          handleChangeViewMode={this.handleChangeViewMode}
          viewMode={viewMode}
          handleChangeDtStamp={this.handleChangeDtStamp}
          handleChangeDtStampToDay={this.handleChangeDtStampToDay}
          AddComponent={AddToolbar}
        />
        {Content}
      </div>
    );
  }
}

export default Calendar;
