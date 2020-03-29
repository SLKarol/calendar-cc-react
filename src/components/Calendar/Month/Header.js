import React from "react";
import moment from "moment";

/**
 * @method Month/Header
 * @description Вывод заголовоков для каледнарных дней (пн., вт., и т.д.)
 */
function Header() {
  const days = [];
  const startDate = moment().startOf("week");
  let i = 0;
  while (i < 7) {
    days.push(
      <div className="calendar__col calendar__col--center" key={i}>
        {startDate.format("dd")}
      </div>
    );
    i++;
    startDate.add(1, "days");
  }
  return <div className="calendar__days calendar__row">{days}</div>;
}

export default Header;
