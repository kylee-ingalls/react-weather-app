import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faCloudRain,
  faSnowflake,
  faSmog,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon(props) {
  const iconMapping = {
    "clear-sky-day": faSun,
    "clear-sky-night": faMoon,
    "few-clouds-day": faCloudSun,
    "few-clouds-night": faCloudMoon,
    "scattered-clouds-day": faCloud,
    "scattered-clouds-night": faCloud,
    "broken-clouds-day": faCloud,
    "broken-clouds-night": faCloud,
    "shower-rain-day": faCloudRain,
    "shower-rain-night": faCloudRain,
    "rain-day": faCloudRain,
    "rain-night": faCloudRain,
    "thunderstorm-day": faBolt,
    "thunderstorm-night": faBolt,
    "snow-day": faSnowflake,
    "snow-night": faSnowflake,
    "mist-day": faSmog,
    "mist-night": faSmog,
  };

  const icon = iconMapping[props.code] || faCloud;

  return <FontAwesomeIcon icon={icon} size="3x" className="weather-icon" />;
}
