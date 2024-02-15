import data from "../data/productos.json";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const pedirProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({ error: "No se encontró el producto" });
    }
  });
};
