import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const apiKey = "22e2130aeacc47e61254fec6ce6af082";

    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
