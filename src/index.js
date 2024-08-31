import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SearchEngine from "./WeatherSearch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="App">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>

      <footer>
        <p class="footer">
          This project was coded by{" "}
          <a
            href="https://github.com/danniesan"
            rel="noreferrer"
            target="_blank"
          >
            Veronica Sandoval
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/danniesan/weather-react.git"
            rel="noreferrer"
            target="_blank"
          >
            on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/2react-weather-app/"
            rel="noreferrer"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
