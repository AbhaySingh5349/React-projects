import "./ExpenseForm.css";
import { useState } from "react";

const ExppenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: ""
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  const inputChangeHnadler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault(); // prevent default of request being sent (since req is not sent , the page will also not stop)

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onAddExpenseData(expenseData);

    // clearing form inputs
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={title}
            onChange={(event) =>
              inputChangeHnadler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          {" "}
          Cancel{" "}
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExppenseForm;
