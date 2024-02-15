import { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>{productos.length > 0 && <ItemList productos={productos} />}</div>
  );
};

export default ItemListContainer;
