import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 10th 2020</div>
      <div className="expense-item__description">
        <h2>Expense item</h2>
        <p className="expense-item__price">$190</p>
      </div>
    </div>
  );
}
export default ExpenseItem;
