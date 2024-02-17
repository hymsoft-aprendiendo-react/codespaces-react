import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto Nivel 3 (avanzado)</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
