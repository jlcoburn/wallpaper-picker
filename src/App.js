import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Results from './Components/Results';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Results/>
    </div>
  );
}

export default App;
