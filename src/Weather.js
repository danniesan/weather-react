import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./weather.css";
import "./index.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ submit: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      submit: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.submit) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="search-input"
                type="search"
                placeholder="Enter a city..."
                onChange={cityChange}
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input className="search-button" type="submit" value="search" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
