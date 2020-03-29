import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import ButtonAddEvent from './components/Calendar/ButtonAddEvent/ButtonAddEvent';
import Cell from './components/Calendar/Month/Day';
import TestHourWeek from './components/Calendar/Week/Hour';
import TestHourDay from './components/Calendar/Day/Hour';
import { VIEW_MODE } from './components/Calendar/consts';

function App() {
  //--- Режим представления данных
  const [viewMode, setViewMode] = useState(VIEW_MODE.MONTH);
  //--- День в календаре
  const [currentDateTimeStamp, setCurrentDateTimeStamp] = useState(
    new Date().toISOString()
  );

  const components = {
    AddToolbar: ButtonAddEvent,
    DayMoth: Cell,
    HourInWeek: TestHourWeek,
    HoursInDay: TestHourDay
  };
  const events = [
    {
      id: 1,
      dateEvent: new Date(),
      duration: 2,
      name: 'Встреча',
      datas: [1, 2, 3, 4, 5]
    }
  ];
  return (
    <div className='App'>
      <main>
        <Calendar
          components={components}
          events={events}
          currentDateTimeStamp={currentDateTimeStamp}
          isSelectedDate={true}
          viewMode={viewMode}
          changeViewMode={setViewMode}
          selectDate={setCurrentDateTimeStamp}
        />
      </main>
    </div>
  );
}

export default App;
