import React, { useEffect, useRef } from "react";
import { calcPositionTime } from "../lib";
/**
 * Вывод часов в столбец
 */
function HoursInDay() {
  //--- ref для строки с часами
  const ref = useRef(null);
  //--- При монтировании компоненты делать активным элемент
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  //--- Сборник div,- номеров часов
  const hours = [];
  const houtToTop = calcPositionTime();
  for (let i = 0; i < 24; i++) {
    hours.push(
      <div
        key={`hour${i}`}
        ref={i === houtToTop ? ref : null}
      >{`${i.toString().padStart(2, "0")}:00`}</div>
    );
  }
  return <div className="calendar__hours">{hours}</div>;
}

export default HoursInDay;
