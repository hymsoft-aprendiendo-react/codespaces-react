import { useState, useEffect } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  // let productos = [];

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div className="itemListContainer">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
