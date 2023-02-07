import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 11);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 230.44;
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <p className="expense-item__price">${expenseAmount}</p>
      </div>
    </div>
  );
}
export default ExpenseItem;
