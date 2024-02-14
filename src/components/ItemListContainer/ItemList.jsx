import Item from "./Item";
const Producto = ({ productos }) => {
  console.log(productos);
  return (
    <>
      <h1>Productos</h1>
      {productos.length > 0 &&
        productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
    </>
  );
};

export default Producto;
