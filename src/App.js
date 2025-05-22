import { useEffect, useState } from 'react';
import './App.css';
import Sprites from './Components/Sprites';

function App() {
  const [pokemonList, setPokemonList] = useState({ results: [] });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(response => response.json())
      .then(json => setPokemonList(json))
      .catch(error => console.error(error));
  }, []);

  console.log(pokemonList.results)

  return (
    <div className="App">
      <div class="flex flex-col min-h-screen justify-start items-center">
     {
        pokemonList.results.map((pokemon) =>       
          {
            return <Sprites url={pokemon.url}/>
          }
        )
     }
      </div>
    </div>
  );
}

export default App;
