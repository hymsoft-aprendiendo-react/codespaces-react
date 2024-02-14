import Item from "./Item";

import styled from "styled-components";

const Contenedor = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
const Producto = ({ productos }) => {
  console.log(productos);
  return (
    <>
      <h1>Productos</h1>
      <Contenedor>
        {productos.length > 0 &&
          productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
      </Contenedor>
    </>
  );
};

export default Producto;
