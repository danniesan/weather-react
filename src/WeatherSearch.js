import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [submit, setSubmit] = useState(false);

  function showWeather(response) {
    setSubmit(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input className="search-button" type="submit" value="search" />
    </form>
  );

  if (submit) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}℃</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind: {weather.wind}km/hr</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
