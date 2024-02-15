const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <div>
        <h4>{producto.title}</h4>
        <p>Precio: ${producto.price}</p>
        <p>Categoría: {producto.type}</p>
        <a className="ver-mas" href={`/item/${producto.id}`}>
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Item;
