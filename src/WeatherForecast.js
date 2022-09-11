import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="13d" size={36} />
          </div>
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temps-max">19°</span>
            <span className="WeatherForecast-temps-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
