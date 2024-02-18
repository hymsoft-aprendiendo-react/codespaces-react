import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
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
          {item.stock > 0 ? (
            <p>Stock: {item.stock}</p>
          ) : (
            <h4>Estamos sin stock de este artículo :(</h4>
          )}
          {item.stock > 0 && (
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={() => {
                agregarAlCarrito(item, cantidad);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
