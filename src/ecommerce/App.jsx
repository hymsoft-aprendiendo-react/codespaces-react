import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Nosotros from "./components/Nosotros/Nosotros";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
