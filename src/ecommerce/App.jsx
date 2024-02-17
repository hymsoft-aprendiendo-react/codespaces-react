import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./main.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Nosotros/Contacto3";
import { CartContext } from "./context/CartContext";

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

  return (
    <div>
      <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
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
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
