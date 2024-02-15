import Item from "./Item";
const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <h2 className="main-title">Productos</h2>
      <div className="productos">
        {productos.map((producto) => (
          <Item producto={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
