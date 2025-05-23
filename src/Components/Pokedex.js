import { useEffect, useState } from 'react';
import Sprites from './Sprites';

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState({ results: [] });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setPokemonList(json))
      .catch(error => console.error(error));
  }, [url]);

  console.log(pokemonList)

  return (
    <div className="h-screen w-screen">
      <div className="relative grid grid-cols-5 h-5/6 w-screen justify-start items-center">
     {
       pokemonList && pokemonList.results.map((pokemon) =>       
          {
            return <Sprites url={pokemon.url}/>
          }
        )
     }
       </div>
     <div className="flex flex-row h-1/6 w-screen justify-center items-center">
        {pokemonList.previous && (
          <button className="px-4 py-2 m-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg transition-colors duration-300 hover:bg-red-500 hover:text-white" onClick={() => setUrl(pokemonList.previous)}>Previous</button>
        )}

        {pokemonList.next && (
          <button className="px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg transition-colors duration-300 hover:bg-red-500 hover:text-white" onClick={() => setUrl(pokemonList.next)}>Next</button>
        )}
      </div>
    </div>
  );
}