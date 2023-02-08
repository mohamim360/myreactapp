import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("hello");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      <button onClick={clickHandler}>Click Here</button>
    </Card>
  );
}
export default ExpenseItem;
