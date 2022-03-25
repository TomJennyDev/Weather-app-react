import React, { useContext } from "react";
import Loading from "../Loading/Loading";
import { StoreContext } from "../store";
import { setQueryParams } from "../store/reducer/actions";
import Styles from "./weathercast.module.css";
function WeatherCast() {
  const [state, dispatch] = useContext(StoreContext);
  const { weatherInfo } = state;
  const { weather, main, wind, visibility } = weatherInfo;
  const isMetrics = state.objQueryParamsToday?.units === "metric";

  const changeUnits = () => (isMetrics ? "C" : "F");

  const handleChecked = (e) => {
    const objParams = {
      q: state.objQueryParamsToday.q,
      units: isMetrics ? "imperial" : "metric",
    };
    dispatch(setQueryParams(objParams));
  };

  return (
    <div className={Styles["wrapper"]}>
      <form>
        <label className="switch">
          <input type="checkbox" checked={isMetrics} onChange={handleChecked} />
          <span className="slider round">
            <span>C</span>
            <span>F</span>
          </span>
        </label>
      </form>
      <div className={Styles["col-left"]}>
        {state.loading ? (
          <Loading />
        ) : (
          <>
            <p className={Styles["cityName"]}>{weatherInfo?.name}</p>
            <div className={Styles["img-weathercast"]}>
              <img
                src={`http://openweathermap.org/img/wn/${
                  weather && weather[0]?.icon
                }@2x.png`}
                alt={weatherInfo?.name}
              />
            </div>
            <p className={Styles["description"]}>
              {weather && weather[0]?.description}
            </p>
            <p className={Styles["temperature"]}>
              {weatherInfo?.main?.temp}
              <sup>o</sup>
              <span>{changeUnits()}</span>
            </p>
          </>
        )}
      </div>

      <div className={Styles["col-right"]}>
        {state.loading ? (
          <Loading />
        ) : (
          <>
            <p className={Styles["cast-info"]}>
              <span style={{ marginRight: "10px" }}>
                <i className="fa-solid fa-temperature-arrow-up"></i>
                {main?.temp_max} <sup>o</sup>
                <span>{changeUnits()} </span>
              </span>

              <span>
                <i className="fa-solid fa-temperature-arrow-down"></i>
                {main?.temp_min} <sup>o</sup>
                <span>{changeUnits()}</span>
              </span>
            </p>
            <p className={Styles["cast-info"]}>
              <i className="fa-solid fa-person"></i>
              Feel Like: {main?.feels_like} <sup>o</sup>
              <span>{changeUnits()}</span>
            </p>
            <p className={Styles["cast-info"]}>
              <i className="fa-solid fa-wind"></i> Wind: {wind?.speed} km/h
            </p>
            <p className={Styles["cast-info"]}>
              <i className="fa-solid fa-droplet"></i> Humidity: {main?.humidity}{" "}
              %
            </p>
            <p className={Styles["cast-info"]}>
              <i className="fa-solid fa-eye-slash"></i> Visibility:{" "}
              {visibility / 1000} Km
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default WeatherCast;
