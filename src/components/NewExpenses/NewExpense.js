import React from "react";
import ExpenseFrom from "./ExpenseFrom";
import "./NewExpense.css";
const NewExpense = (props) => {

  const saveHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseFrom onSaveData = {saveHandler} />
    </div>
  );
};

export default NewExpense;
