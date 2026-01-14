import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
