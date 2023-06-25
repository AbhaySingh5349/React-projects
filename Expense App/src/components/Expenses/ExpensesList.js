import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback"> No expenses found </h2>
  );

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list"> {expensesContent} </ul>;
};

export default ExpensesList;
