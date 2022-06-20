import './App.css';
import Pokedex from './components/pokedex';
import pokemons from './data';

function App() {
  return (
    <div className='container'>
      <Pokedex pokemons={ pokemons }/>
    </div>
  )
}

export default App;
