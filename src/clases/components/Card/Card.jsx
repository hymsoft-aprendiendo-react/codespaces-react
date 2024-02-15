import "./Card.css";
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
