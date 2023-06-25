import { useState } from "react";

import classes from "./Form.module.css";

const defaultFormInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [formInput, setFormInput] = useState(defaultFormInput);

  const formSubmitHandler = (event) => {
    console.log("SUBMIT");
    event.preventDefault(); // prevent default of request being sent (since req is not sent , the page will also not stop)

    const financeData = {
      "current-savings": formInput["current-savings"],
      "yearly-contribution": formInput["yearly-contribution"],
      "expected-return": formInput["expected-return"],
      duration: formInput.duration,
    };
    props.onCalculate(financeData);

    // clearing form inputs
    setFormInput(defaultFormInput);
  };

  const resetHandler = (event) => {
    console.log("RESET");

    setFormInput(defaultFormInput);
  };

  const inputChangeHnadler = (identifier, value) => {
    console.log("identifier: ", identifier, " , value: ", value);

    setFormInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +value, // converting string to number
      };
    });
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formInput["current-savings"]}
            onChange={(event) =>
              inputChangeHnadler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHnadler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formInput["expected-return"]}
            onChange={(event) =>
              inputChangeHnadler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formInput.duration}
            onChange={(event) =>
              inputChangeHnadler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
