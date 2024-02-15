import { useState } from "react";
import H2 from "./H2";
const Text = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Ocultar Texto" : "Mostrar Texto"}
      </button>
      {showText && <H2 />}
    </>
  );
};

export default Text;
