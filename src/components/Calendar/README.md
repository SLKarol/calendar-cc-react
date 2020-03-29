# Календарь
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
   <Calendar components={components} events={events} />
 )
```

