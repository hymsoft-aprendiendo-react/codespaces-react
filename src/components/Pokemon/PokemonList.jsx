import { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0",
  );
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const handlePrev = () => {
    prev && setUrl(prev);
  };

  const handleNext = () => {
    next && setUrl(next);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setNext(data.next);
        setPrev(data.previous);
      });
  }, [url]);

  return (
    <div>
      {pokemonList &&
        pokemonList.map((pokemon) => {
          return <h2 key={pokemon.name}>{pokemon.name}</h2>;
        })}
      {prev ? (
        <button onClick={handlePrev}>Anterior</button>
      ) : (
        <button disabled>Anterior</button>
      )}
      {next ? (
        <button onClick={handleNext}>Siguiente</button>
      ) : (
        <button disabled>Siguiente</button>
      )}
    </div>
  );
};

export default PokemonList;
