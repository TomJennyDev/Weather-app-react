import React, { Fragment, useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreContext } from "./store";
import { setErrorMessage } from "./store/reducer/actions";

function ToastComponent({ children }) {
  const [state, dispatch] = useContext(StoreContext);
  useEffect(() => {
    const notify = () => toast(state.errorMessage);

    if (state?.errorMessage) {
      notify();
      dispatch(setErrorMessage(""));
    }
  }, [state.errorMessage, dispatch]);
  return (
    <Fragment>
      {children}
      <ToastContainer />
    </Fragment>
  );
}

export default ToastComponent;
