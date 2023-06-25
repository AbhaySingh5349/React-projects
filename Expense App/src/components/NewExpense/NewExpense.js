import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const displayFormHandler = () => {
    setFormVisibility(true);
  };

  const dismissFormHandler = () => {
    setFormVisibility(false);
  };

  const addExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {!formVisibility && (
        <button onClick={displayFormHandler}> Add New Expense </button>
      )}
      {formVisibility && (
        <ExpenseForm
          onAddExpenseData={addExpenseDataHandler}
          onCancel={dismissFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
