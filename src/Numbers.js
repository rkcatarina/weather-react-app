import React from "react";

export default function Numbers() {
  return (
    <div className="Numbers">
      <ul>
        <li>
          <strong>Wind</strong>: <span className="wind">10 km/h</span>
        </li>
        <li>
          <strong>Pressure</strong>: <span className="pressure">1010 hPa</span>
        </li>
        <li>
          <strong>Humidity</strong>: <span className="humidity"> 30%</span>
        </li>
        <li>
          <strong>Sight</strong>: <span className="sight">Sunny</span>
        </li>
      </ul>
    </div>
  );
}
