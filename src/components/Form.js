import React, { useContext } from "react";
import { StoreContext } from "./store";
import { setErrorMessage, setQueryParams } from "./store/reducer/actions";

function Form() {
  const [, dispatch] = useContext(StoreContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.city.value;
    const objParams = {
      q: value,
      units: "metric",
    };

    if (value) {
      dispatch(setQueryParams(objParams));
    } else {
      const errorMessage = "Please input name of city";
      dispatch(setErrorMessage(errorMessage));
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          name="city"
          placeholder="name of the city"
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass-location"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
