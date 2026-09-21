import "./card.css"
const Card = (props) => {
  return <div className="card">
<h1>{props.title}</h1>
<p>{props.discription}</p>

  </div>;
};
export default Card;
