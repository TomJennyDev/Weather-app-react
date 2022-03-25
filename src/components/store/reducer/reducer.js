import { getUniqueItem } from "../../../utils/utils";
import {
  SET_ERROR_MESSAGE,
  SET_LOADING,
  SET_QUERY_PARAMS,
  SET_WEATHER_INFO,
  SET_WEATHER_WEEK_INFO,
} from "./constant";

const initState = {
  objQueryParamsToday: {
    q: "Ho Chi Minh",
    units: "metric",
  },
  objQueryParamsWeek: {
    q: "Ho Chi Minh",
  },
  loading: false,
  errorMessage: "",
  weatherInfo: 6,
  weatherWeekInfo: [],
};

export function weatherReducer(initState, action) {
  switch (action.type) {
    case SET_QUERY_PARAMS: {
      initState.objQueryParamsToday = action.payload;
      initState.objQueryParamsWeek = { q: action.payload.q };
      return { ...initState };
    }
    case SET_WEATHER_INFO: {
      initState.weatherInfo = action.payload;
      return { ...initState };
    }

    case SET_WEATHER_WEEK_INFO: {
      initState.weatherWeekInfo = action.payload;
      initState.weatherWeekInfo = getUniqueItem(initState.weatherWeekInfo.list);

      return { ...initState };
    }
    case SET_LOADING: {
      initState.loading = action.payload;
      return { ...initState };
    }
    case SET_ERROR_MESSAGE: {
      initState.errorMessage = action.payload;
      return { ...initState };
    }
    default:
      throw new Error();
  }
}

export { initState };
export default weatherReducer;
