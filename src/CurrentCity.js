import React from "react";
import "./CurrentCity.css";
export default function CurrentCity() {
  return (
    <div className="CurrentCity">
      <span className="currCity">New York </span>
      <strong id="currTemp">10°C</strong>
      <span className="units">
        <span className="on" id="celsiusSign">
          °C
        </span>
        <span>|</span>
        <span href="#" id="fahrenheitSign">
          °F
        </span>
      </span>
    </div>
  );
}
