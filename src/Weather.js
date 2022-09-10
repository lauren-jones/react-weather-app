import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="weather-info">
        <div className="row">
          <div className="col-6">
            <h1>New York</h1>
            <ul>
              <li>Saturday 11:05, fog</li>
              <li>
                Humidity: <span className="highlight">80%</span>, Wind:{" "}
                <span className="highlight">2.68km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="temperature-container d-flex justify-content-end">
              <div>
                <span className="temperature">18</span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
