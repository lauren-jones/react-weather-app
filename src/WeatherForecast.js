import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  const apiKey = "22e2130aeacc47e61254fec6ce6af082";

  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

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
