import React from "react";
import Styles from "./weatherweek.module.css";
const WeatherItem = ({ item, units, length }) => {
  const { weather, weatherInfo, main } = item;

  return (
    <div
      className={Styles["wrapper-item"]}
      style={{ flex: `calc(100% / ${length ? length : 6})` }}
    >
      <div className={Styles.dayofweek}>{item.dayOfWeek}</div>
      <div className={Styles.img}>
        <img
          src={`http://openweathermap.org/img/wn/${
            weather && weather[0]?.icon
          }@2x.png`}
          alt={weatherInfo?.name}
        />
      </div>
      <p className={Styles.description}>{weather && weather[0].description}</p>
      <div className={Styles.temperature}>
        <i className="fa-solid fa-temperature-three-quarters"></i>
        {main?.temp_min}/ {main?.temp_max} <sup>o</sup>
        <span>{units === "metric" ? "C" : "F"}</span>
      </div>
    </div>
  );
};

export default WeatherItem;
