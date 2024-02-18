import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    categoria ? setTitulo(categoria) : setTitulo("Productos");
    const q = categoria
      ? query(productosRef, where("type", "==", categoria))
      : productosRef;

    getDocs(q).then((res) =>
      setProductos(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      ),
    );
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
