import React, { useReducer } from "react";
import Context from "./Context";
import { initState, weatherReducer } from "./reducer/reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
