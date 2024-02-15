import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import "./main.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer itemId={2} />
    </div>
  );
}

export default App;
