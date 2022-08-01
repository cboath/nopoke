import React from 'react'
import './App.css';
import PokedexComponent from './components/PokedexComponent'
import RegionComponent from './components/RegionComponent'
import PokeDisplyComponent from './components/PokeDisplayComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokeDisplyComponent />
        <p>Quest</p>
      </header>
    </div>
  );
}

export default App;
