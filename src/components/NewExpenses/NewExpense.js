import React from "react";
import ExpenseFrom from "./ExpenseFrom";
import "./NewExpense.css";
const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseFrom />
    </div>
  );
};

export default NewExpense;
