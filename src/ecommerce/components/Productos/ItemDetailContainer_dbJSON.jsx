import { useState, useEffect } from "react";
import { pedirProductoPorId } from "../../helpers/pedirProductos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const itemId = Number(useParams().id);

  useEffect(() => {
    pedirProductoPorId(itemId).then((res) => {
      setItem(res);
    });
  }, [itemId]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
