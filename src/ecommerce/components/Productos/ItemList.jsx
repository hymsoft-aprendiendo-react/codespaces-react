import Item from "./Item";
import { toCapitalize } from "../../helpers/utils";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="main-title">{toCapitalize(titulo)}</h2>
      <div className="productos">
        {productos.map((producto) => (
          <Item producto={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
