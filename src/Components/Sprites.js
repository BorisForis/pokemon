import { useEffect, useState } from "react"

export default function Sprites(props) {

    const [pokemonSprite, setPokemonSprite] = useState({ sprites: {} });

    useEffect(() => {
    fetch(props.url)
      .then(response => response.json())
      .then(json => setPokemonSprite(json))
      .catch(error => console.error(error));
  }, []);

  function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

  console.log(pokemonSprite.sprites.front_default)
  return (
    <button class="relative inline-flex items-start justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg">
        <img
          src={pokemonSprite.sprites.front_default}
          alt="Katherine Johnson"
        />  
        <span className="">{capitalize(pokemonSprite.name)}</span> 
    </button>
  )
}