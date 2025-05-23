import { useEffect, useState } from "react"

export default function Sprites(props) {

    const [pokemonSprite, setPokemonSprite] = useState({ sprites: {} });

    useEffect(() => {
    fetch(props.url)
      .then(response => response.json())
      .then(json => setPokemonSprite(json))
      .catch(error => console.error(error));
  }, [props]);

  console.log(pokemonSprite.sprites.front_default)
  return (
    <button class="relative inline-flex items-center justify-center p-2 mb-2 me-2 text-sm font-medium text-white rounded-lg border-2 border-red-500 bg-red-500 hover:bg-blue-500 hover:text-red-500 transition-colors duration-300">
        <img
          src={pokemonSprite.sprites.front_default}
          alt="Pokebutton"
          className="border-2 border-red-500 bg-white rounded-xl"
        />  
        <span className="relative flex flex-row items-center justify-center text-white w-full h-full text-xl capitalize">{pokemonSprite.name}</span> 
    </button>
  )
}