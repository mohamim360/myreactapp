import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";

//point 1
// let changeContent = <p>NO EXPENSE FOUND</p>;

// if(listYear.length > 0){
// changeContent = listYear.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))
// }

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const listYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      
      {/* point 1 */}
      {/* {changeContent}  */}

      {/* {listYear.length === 0 && <p>NO EXPENSE FOUND</p>}
      {listYear.length > 0 && listYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        

      {/* {listYear.length === 0 ? (
        <p>NO EXPENSE FOUND</p>
      ) : (
        listYear.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      <ExpenseList items={listYear} />
    </Card>
  );
};

export default Expenses;
