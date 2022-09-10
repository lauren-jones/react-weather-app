import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <hr />
      <h1>New York</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Saturday 11:05, fog</li>
            <li>Humidity: 80%, Wind: 2.68km/h</li>
          </ul>
        </div>
        <div className="col-6">18°C</div>
      </div>
    </div>
  );
}
