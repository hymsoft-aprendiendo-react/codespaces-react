import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirProductos } from "../../helpers/pedirProductos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirProductos().then((res) => {
      if (categoria) {
        setProductos(res.filter((producto) => producto.type === categoria));
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <div>
      {productos.length > 0 && (
        <ItemList productos={productos} titulo={titulo} />
      )}
    </div>
  );
};

export default ItemListContainer;
