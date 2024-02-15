import { useState, useEffect } from "react";
import { pedirProductoPorId } from "../../helpers/pedirProductos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirProductoPorId(itemId).then((res) => {
      setItem(res);
    });
  }, [itemId]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
