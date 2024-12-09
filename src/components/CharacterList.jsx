import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? character.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="character-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">Todos los estados</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
      <div className="grid">
        {filteredCharacters.map((character) => (
          <div className="character-card" key={character.id}>
            <Link to={`/character/${character.id}`}>
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
