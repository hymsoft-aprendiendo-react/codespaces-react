const Usuario = ({ nombre, edad, nacionalidad }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <p>Edad: {edad} años</p>
      <p>Nacionalidad: {nacionalidad}</p>
      <hr />
    </div>
  );
};

export default Usuario;
