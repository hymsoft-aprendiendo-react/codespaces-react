const Nosotros = () => {
  window.addEventListener("click", () => {
    console.log("click");
  });

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Este es el componente "Nosotros"</p>
    </div>
  );
};

export default Nosotros;
