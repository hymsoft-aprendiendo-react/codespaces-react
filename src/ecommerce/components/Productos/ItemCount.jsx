const ItemCount = ({
  cantidad,
  handleSumar,
  handleRestar,
  handleAgregar,
  stockInicial,
}) => {
  console.log({ jsx: "itemCount", cantidad, stockInicial });
  return (
    <>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleAgregar}>
        Agregrar al carrito
      </button>
    </>
  );
};

export default ItemCount;
