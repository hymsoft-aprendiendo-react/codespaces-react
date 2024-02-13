import { useState, useEffect } from "react";
const H2 = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("Texto actualizado");
  }, [text]);
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>
    </div>
  );
};

export default H2;
