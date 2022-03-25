import fetchAPI from "./api";

const weatherApi = {
  getWeatherCity(objQueryParams) {
    const pathUrl = "weather";
    objQueryParams =
      "?" +
      Object.keys(objQueryParams)
        .map((params) => params + "=" + objQueryParams[params])
        .join("&");
    const data = fetchAPI(pathUrl, objQueryParams);
    return data;
  },

  getWeatherWeekCity(objQueryParams) {
    const pathUrl = "forecast";
    objQueryParams =
      "?" +
      Object.keys(objQueryParams)
        .map((params) => params + "=" + objQueryParams[params])
        .join("&");
    const data = fetchAPI(pathUrl, objQueryParams);
    return data;
  },
};

export default weatherApi;
