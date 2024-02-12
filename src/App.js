import Usuario from "./components/Usuario/Usuario";
import Card from "./components/Card/Card";
function App() {
  return (
    <div>
      <Usuario nombre="Hugo" edad="52" nacionalidad="Argentino" />
      <Usuario nombre="María" edad="35" nacionalidad="Chilena" />
      <Usuario nombre="Carlos" edad="41" nacionalidad="Mexicano" />
      <Card title="Card - 01" description="Descripción para la card numero 1" />
      <Card title="Card - 02" description="Esta es la card número 2" />
    </div>
  );
}

export default App;
