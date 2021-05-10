import React from "react";
import "./CurrentDay.css";
export default function CurrentDay() {
  return (
    <div className="CurrentDay">
      <ul className="current-day">
        <li className="weekDay">Sunday</li>
        <li className="date">Feb 28</li>
        <li className="time">22:30h</li>
      </ul>
    </div>
  );
}
