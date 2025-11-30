// src/Card.tsx
import React from 'react';
import type { PokemonLocal, DigimonLocal } from './types';

interface CardProps {
  data: PokemonLocal | DigimonLocal;
  type: 'pokemon' | 'digimon';
}

const Card: React.FC<CardProps> = ({ data, type }) => {
  return (
    <div style={{
      border: '2px solid #eee',
      borderRadius: '12px',
      padding: '15px',
      width: '200px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <h3 style={{ textTransform: 'capitalize', fontSize: '1.2rem' }}>{data.nombre}</h3>
      <img 
        src={data.img} 
        alt={data.nombre} 
        style={{ width: '120px', height: '120px', objectFit: 'contain' }} 
      />

      {type === 'pokemon' ? (
        // Renderizado de Pokémon
        <div style={{ textAlign: 'left', marginTop: '10px', fontSize: '0.9rem' }}>
          <p><strong>Nº:</strong> {(data as PokemonLocal).id}</p>
          <p><strong>HP:</strong> {(data as PokemonLocal).hp}</p>
          <p><strong>ATK:</strong> {(data as PokemonLocal).ataque}</p>
          <p><strong>DEF:</strong> {(data as PokemonLocal).defensa}</p>
        </div>
      ) : (
        // Renderizado de Digimon
        <div style={{ marginTop: '10px' }}>
          <span style={{ 
            background: '#e67e22', color: 'white', 
            padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' 
          }}>
            {(data as DigimonLocal).level}
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;