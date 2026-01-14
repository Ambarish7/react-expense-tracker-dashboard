import React from "react";

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <ul className="list">
      {expenses.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <span>₹{item.amount}</span>
          <button onClick={() => onDelete(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
