import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: "200",
    date: new Date(2021, 9, 10)
  },
  {
    id: 2,
    title: "Health Insurance",
    amount: "100",
    date: new Date(2020, 10, 10)
  },
  {
    id: 3,
    title: "Electricit Bill",
    amount: "80",
    date: new Date(2022, 5, 30)
  }
];

function App() {
  const [expensesList, setExpensesList] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("app.js: ", expense);
    setExpensesList((prevExpenses) => {
      console.log("list: ", [expense, ...prevExpenses]);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
