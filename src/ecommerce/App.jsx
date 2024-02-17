import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import "./main.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Nosotros/Contacto3";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const existe = nuevoCarrito.find((item) => item.id === itemAgregado.id);

    if (existe) {
      existe.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          carrito,
          agregarAlCarrito,
          cantidadEnCarrito,
          precioTotal,
          vaciarCarrito,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
