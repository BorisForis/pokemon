import { useState } from 'react';
import './App.css';



function App() {
  const [pokemonList, setPokemonList] = useState([])
  return (
    <div className="App">
     <div className='object-center text-9xl'>This is working</div>
    </div>
  );
}

export default App;
