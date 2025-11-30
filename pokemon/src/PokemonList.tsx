import React, { useState, useEffect } from 'react';
import Card from './Card';
import ErrorPage from './ErrorPage'; // Importamos el error
import type { PokemonLocal, PokeApiResponse } from './types';

interface PokemonListProps {
  min: number;
  max: number;
}

const PokemonList: React.FC<PokemonListProps> = ({ min, max }) => {
  const [pokemons, setPokemons] = useState<PokemonLocal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // Nuevo estado para controlar errores
  const [error, setError] = useState<boolean>(false);

  const getRandomId = () => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    setLoading(true);
    setError(false); // Reseteamos el error al cambiar de generación

    const randomIds = Array.from({ length: 10 }, () => getRandomId());

    const promises = randomIds.map(id => 
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
        if (!res.ok) throw new Error('Error en la petición');
        return res.json();
      })
    );

    Promise.all(promises)
      .then((results) => {
        const typedResults = results as PokeApiResponse[];
        const cleanData: PokemonLocal[] = typedResults.map(p => ({
          id: p.id,
          nombre: p.name,
          img: p.sprites.other['official-artwork'].front_default || p.sprites.front_default,
          hp: p.stats[0].base_stat,
          ataque: p.stats[1].base_stat,
          defensa: p.stats[2].base_stat
        }));
        setPokemons(cleanData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true); // ¡Aquí capturamos el error!
        setLoading(false);
      });
      
  }, [min, max]);

  // Si hay error, mostramos el componente de Error
  if (error) return <ErrorPage />;

  if (loading) return <h2 style={{textAlign:'center'}}>Cargando Pokédex...</h2>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {pokemons.map((p, i) => (
        <Card key={`${p.id}-${i}`} data={p} type="pokemon" />
      ))}
    </div>
  );
};

export default PokemonList;