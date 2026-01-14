import React from "react";

export default function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="summary">
      <h3>Total Expense: ₹{total}</h3>
    </div>
  );
}
