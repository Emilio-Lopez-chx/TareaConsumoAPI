import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Personajes de Rick and Morty</h1>
        <Routes>
          <Route path="/" element={<CharacterList characters={characters} />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
