import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState({});

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = ` https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}
      &exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
