import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from './Components/Pokedex';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="pokedex" element={<Pokedex />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
