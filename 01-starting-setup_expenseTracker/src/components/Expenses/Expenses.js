import { useState } from "react";
import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // or use date.getFullYear instead of below!!
  const dateParser = (date) => {
    const dateString = date.toString().split(" ");
    const year = dateString[3];
    return year;
  };

  const datedArr = props.expenseArr.filter((expense) => {
    return dateParser(expense.date) === filteredYear;
  });

  // let expensesContent = <p>No expenses found</p>;
  // if (datedArr.length > 0) {
  //   expensesContent = datedArr.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={datedArr} />
       <ExpensesList items={datedArr}/>
      </Card>
    </div>
  );
};

export default Expenses;
