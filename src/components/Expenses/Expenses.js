import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2021");
  const filterByYearHandler = (year) => {
    setYearFilter(year);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onFilterByYear={filterByYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
