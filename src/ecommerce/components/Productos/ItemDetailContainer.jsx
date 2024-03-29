import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const itemId = useParams().id;

  useEffect(() => {
    const refDoc = doc(db, "productos", itemId);
    getDoc(refDoc).then((res) => setItem({ ...res.data(), id: res.id }));
  }, [itemId]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
