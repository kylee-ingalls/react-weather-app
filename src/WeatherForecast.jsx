import React from "react";

export default function WeatherForecast(props) {
  if (!props.data) return null;

  return (
    <div className="WeatherForecast">
      <div className="row">
        {props.data.map((day, index) => {
          let max = Math.round(day.temperature.maximum);
          let min = Math.round(day.temperature.minimum);
          let date = new Date(day.time * 1000);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekday = days[date.getDay()];

          return (
            <div className="col" key={day.time}>
              <div className="forecast-day">{weekday}</div>

              <img
                src={day.condition.icon_url}
                alt={day.condition.description}
                width="50"
              />

              <div className="forecast-temps">
                <span className="max">{max}°</span>
                <span className="min">{min}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}