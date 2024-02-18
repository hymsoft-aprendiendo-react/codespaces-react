import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>
      {carrito.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Precio unitario: $ {item.price}</p>
          <p>Precio Total: $ {item.price * item.cantidad}</p>
          <p>Unidades: {item.cantidad}</p>
          <br />
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: $ {precioTotal()}</h2>
          <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
          <Link to="/checkout">Finalizar compra</Link>
        </>
      ) : (
        <h2>No hay artículos para mostrar</h2>
      )}
    </div>
  );
};

export default Carrito;
