import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CharacterDetails = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error al encontrar los detalles de los personajes:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="character-details">
      <Link to="/">Volver a la lista</Link>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p><strong>Estado:</strong> {character.status}</p>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Genero:</strong> {character.gender}</p>
      <p><strong>Origen:</strong> {character.origin.name}</p>
      <p><strong>Ubicacion:</strong> {character.location.name}</p>
    </div>
  );
};

export default CharacterDetails;
