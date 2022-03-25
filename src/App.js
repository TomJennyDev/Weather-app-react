import { useContext, useEffect } from "react";
import "./App.css";
import weatherApi from "./components/api/weatherApi";
import Form from "./components/Form";
import WeatherHeader from "./components/Header";
import { StoreContext } from "./components/store";
import {
  setErrorMessage,
  setLoading,
} from "./components/store/reducer/actions";
import {
  SET_WEATHER_INFO,
  SET_WEATHER_WEEK_INFO,
} from "./components/store/reducer/constant";
import WeatherCast from "./components/WeatherCast/WeatherCast";
import WeatherWeek from "./components/WeatherWeek/WeatherWeek";

function App() {
  const [state, dispatch] = useContext(StoreContext);
  const { objQueryParamsToday: today } = state;

  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));

      const dataWeatherCast = await weatherApi.getWeatherCity(today);
      const dataWeatherWeekCity = await weatherApi.getWeatherWeekCity(today);

      if (dataWeatherCast && dataWeatherWeekCity) {
        await dispatch({ type: SET_WEATHER_INFO, payload: dataWeatherCast });
        await dispatch({
          type: SET_WEATHER_WEEK_INFO,
          payload: dataWeatherWeekCity,
        });
        dispatch(setLoading(false));
      } else {
        const errorMessage = "invalid name of city";
        dispatch(setErrorMessage(errorMessage));
      }
    })();
  }, [today, dispatch]);

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}  "/background.jpg")`,
      }}
    >
      <div className="container">
        <WeatherHeader />
        <Form />
        {state.weatherInfo ? <WeatherCast /> : ""}
        <WeatherWeek />
      </div>
    </div>
  );
}

export default App;
