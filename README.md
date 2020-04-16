# Календарь

![Скриншот](https://github.com/SLKarol/calendar-cc-react/raw/master/screenshots/screenshot.PNG)

Компонент для отображения календаря и назначенных мероприятий (этот момент в разработке).<br/>
Предоставляется возможность задать свой компонент для показа: дополнительной кнопки в тулбаре; дня в месяце; часа в неделях; часа в днях.
Задаётся это всё через свойство **components** *(см. пример ниже)*.<br/>
<br>
"Событие" в календаре в разработке, пока предполагаю, что будет массив из записей с полями:
* **id**
* **dateEvent** Дата/время события, формат JS Date
* **duration** Длительность события в часах
* **name** Названеи события
* **datas** какая-то дополнителньная информация

## Пример вызова:

```javascript
import ButtonAddEvent from "./components/Calendar/ButtonAddEvent/ButtonAddEvent";
import Cell from "./components/Calendar/Month/Day";
import TestHourWeek from "./components/Calendar/Week/Hour";
import TestHourDay from "./components/Calendar/Day/Hour";
// ...
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
     name: "Митинг",
     datas: [1, 2, 3, 4, 5]
   }
];
 return (
    <Calendar
       components={components}
       events={events}
       currentDateTimeStamp={new Date()}
       isSelectedDate={true}
       viewMode={'MONTH'}
       changeViewMode={setViewMode}
       selectDate={setCurrentDateTimeStamp}
    />
 )
```

## Свойства компонента:

* **components** Объект, содержащий компоненты: { AddToolbar, DayMoth, HourInWeek, HoursInDay } . **AddToolbar** Компонент дополнительных кнопок в тулбаре; **DayMoth** Компонент, который показывает день в месяце; **HourInWeek** Компонент, который показывает час в "Неделя"; **HoursInDay** Компонент, который показывает час в "День". Свойства будут описаны ниже.
* **events** События в календаре (см. выше)
* **currentDateTimeStamp** Текущее дата-время календаря (в ISO формате)
* **viewMode** Режим представления календрая. Возможные значения: "MONTH", "WEEK", "DAY"
* **changeViewMode** Обработчик смены представления. В качестве параметра принимает строку
* **selectDate** Обработчик смены дня в календаре
* **isSelectedDate** День в календаре выбран? - true или false

### Свойства компонента DayMoth

* **visible** Этот день виден?
* **selected** Этот день выбран?
* **ISOString** День в ISOFormat
* **isToday** Это сегодняшний день?

### Свойства компонента HourInWeek

* **ISOString** День/время в ISOFormat
* **dayInWeek** День недели
* **hourInDay** Час в дне
* **event** Событие на этот день-час

### Свойства компонента HoursInDay

* **ISOString** День/время в ISOFormat
* **event** Событие на этот день-час
* **hourInDay** Час в дне
