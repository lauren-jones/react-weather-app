import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li className="text-capitalize">
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity:{" "}
              <span className="highlight">{props.data.humidity}%</span>, Wind:{" "}
              <span className="highlight">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
