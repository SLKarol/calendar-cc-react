import React from "react";
import { ReactComponent as Plus } from "./plus.svg";

export default function ButtonAddEvent() {
  return (
    <button className="calendar__button calendar__button-tolbar-black">
      <Plus className="calendar__icon-toolbar" />
      Мероприятие
    </button>
  );
}
