import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./index.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "cb60bbeo7bd602d062ff8d664eta0043";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getWeatherIcon(description) {
    const desc = description.toLowerCase();

    if (desc.includes("clear")) return "CLEAR_DAY";
    if (desc.includes("cloud")) return "CLOUDY";
    if (desc.includes("rain")) return "RAIN";
    if (desc.includes("drizzle")) return "SLEET";
    if (desc.includes("snow")) return "SNOW";
    if (desc.includes("thunder")) return "WIND";

    return "CLEAR_DAY";
  }

  return (
    <div className="App">
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          onChange={handleCityChange}
        />
        <button type="submit">Search</button>
      </form>

      {weather && (
        <div>
          <ReactAnimatedWeather
            icon={getWeatherIcon(weather.description)}
            size={64}
            animate={true}
          />

          <p>Temperature: {Math.round(weather.temperature)}°C</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.wind} km/h</p>
          <p>{weather.description}</p>
        </div>
      )}
    </div>
  );
}
