import React, { useState, useEffect } from 'react';
import Card from './Card';
import ErrorPage from './ErrorPage'; // Importamos el error
import type { DigimonLocal, DigimonApiResponse } from './types';

const DigimonList: React.FC = () => {
  const [digimons, setDigimons] = useState<DigimonLocal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false); // Estado de error

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(res => {
        if (!res.ok) throw new Error('Fallo en DAPI');
        return res.json();
      })
      .then((data: DigimonApiResponse[]) => {
        const randomSelection: DigimonLocal[] = [];
        for (let i = 0; i < 10; i++) {
          // Chequeo de seguridad por si la API devuelve menos datos
          if (data.length > 0) {
            const r = Math.floor(Math.random() * data.length);
            randomSelection.push({
              nombre: data[r].name,
              img: data[r].img,
              level: data[r].level
            });
          }
        }
        setDigimons(randomSelection);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true); // Capturamos el error
        setLoading(false);
      });
  }, []);

  if (error) return <ErrorPage />; // Mostramos la imagen 404

  if (loading) return <h2 style={{textAlign:'center'}}>Conectando al Digimundo...</h2>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {digimons.map((d, i) => (
        <Card key={i} data={d} type="digimon" />
      ))}
    </div>
  );
};

export default DigimonList;