import React from "react";
import "./index.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />

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
              href="https://2react-weather-app.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
