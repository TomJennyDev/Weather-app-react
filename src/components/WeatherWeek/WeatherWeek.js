import React, { Fragment, useContext } from "react";
import Loading from "../Loading/Loading";
import { StoreContext } from "../store";
import WeatherItem from "./WeatherItem";
import Styles from "./weatherweek.module.css";
function WeatherWeek() {
  const [state] = useContext(StoreContext);
  const length = state?.weatherWeekInfo?.length
    ? state?.weatherWeekInfo?.length
    : 6;
  return (
    <div className={Styles.wrapper}>
      {state.loading
        ? Array.from(Array(6).keys()).map((item, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={Styles["wrapper-item"]}
                  style={{ flex: `calc(100% / ${length})` }}
                >
                  <Loading />
                </div>
              </Fragment>
            );
          })
        : state?.weatherWeekInfo?.map((item, index) => {
            return (
              <Fragment key={index}>
                <WeatherItem
                  item={item}
                  units={state.objQueryParamsToday.units}
                  length={length}
                />
              </Fragment>
            );
          })}
    </div>
  );
}

export default WeatherWeek;
