import {
  SET_ERROR_MESSAGE,
  SET_LOADING,
  SET_QUERY_PARAMS,
  SET_WEATHER_INFO,
  SET_WEATHER_WEEK_INFO,
} from "./constant";

export const setWeatherInfo = (payload) => ({
  type: SET_WEATHER_INFO,
  payload,
});

export const setQueryParams = (payload) => ({
  type: SET_QUERY_PARAMS,
  payload,
});

export const setWeatherWeekInfo = (payload) => ({
  type: SET_WEATHER_WEEK_INFO,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setErrorMessage = (payload) => ({
  type: SET_ERROR_MESSAGE,
  payload,
});
