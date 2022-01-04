import { useEffect, useState } from "react";
import { PokemonThummail } from "./components/PokemonThummail";
import "./home.scss";

const ApiPokemon = "https://pokeapi.co/api/v2/pokemon?limit=21";

export function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(ApiPokemon);

  const getAllpokemon = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();

        setAllPokemon((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };
  console.log(allPokemon);

  useEffect(() => {
    getAllpokemon();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container">
        <div className="all-container ">
          {allPokemon.map((pokemon) => (
            <PokemonThummail
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
            />
          ))}
        </div>
        <button className="load-more" onClick={getAllpokemon}>
          Load more
        </button>
      </div>
    </div>
  );
}
