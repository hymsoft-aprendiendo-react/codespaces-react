const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <h2>{producto.title}</h2>
      <h3>${producto.price}</h3>
      <p>{producto.description}</p>
    </div>
  );
};

export default Item;
