import React from "react";
import SearchEngine from "./SearchEngine";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <h1>New York</h1>
      <ul>
        <li>Wdnesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />

            <span className="temperature">6</span>
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
