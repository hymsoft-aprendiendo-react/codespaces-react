import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    console.log({ ...item, cantidad });
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="titulos">{item.title}</h3>
          <p className="descripcion">{item.description}</p>
          <p className="categoria">Categoría: {item.type}</p>
          <p className="precio">Precio: ${item.price}</p>
          <p>Stock: {item.stock}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={handleAgregar}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
