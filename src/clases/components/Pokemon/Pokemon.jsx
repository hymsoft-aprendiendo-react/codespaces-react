import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [pokemonActualId, setPokemonActualId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonActualId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [pokemonActualId]);

  const handleAnterior = () => {
    pokemonActualId > 1 && setPokemonActualId(pokemonActualId - 1);
  };

  const handleSiguiente = () => {
    setPokemonActualId(pokemonActualId + 1);
  };

  return (
    <>
      {pokemon && (
        <div>
          <h1>Pokemons</h1>
          <hr />
          <h2>{pokemon.name}</h2>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          {pokemonActualId > 1 ? (
            <button onClick={handleAnterior}>Anterior</button>
          ) : (
            <button disabled>Anterior</button>
          )}
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </>
  );
};

export default Pokemon;
