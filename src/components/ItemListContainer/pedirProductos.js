import data from "../../data/productos.json";

const PedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export default PedirProductos;
