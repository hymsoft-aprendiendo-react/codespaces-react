import { useState } from "react";

const Contacto = () => {
  const [valores, setValores] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", valores);
  };

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto Nivel 2 (medio)</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          value={valores.nombre}
          onChange={handleValores}
          name="nombre"
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          value={valores.email}
          onChange={handleValores}
          name="email"
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          value={valores.telefono}
          onChange={handleValores}
          name="telefono"
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
