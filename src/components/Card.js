import './Card.css'

function Card(props){
  const cls = 'card ' + props.className;
  return(
   
    <div className={cls} >{props.children}</div>
  );
}

export default Card;