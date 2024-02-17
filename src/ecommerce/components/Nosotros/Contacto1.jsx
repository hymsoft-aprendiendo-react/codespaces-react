import { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", { nombre, email, telefono });
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto Nivel 1 (básico)</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          value={nombre}
          onChange={handleNombre}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          value={telefono}
          onChange={handleTelefono}
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
