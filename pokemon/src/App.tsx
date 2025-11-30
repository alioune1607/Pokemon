import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import DigimonList from './DigimonList';
import ErrorPage from './ErrorPage'; // ✅ Usamos el componente nuevo

const Home: React.FC = () => (
  <div style={{ 
    display: 'flex', flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', marginTop: '50px', width: '100%' 
  }}>
    <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>Bienvenido al Desafío API</h1>
    <p style={{ fontSize: '1.2rem', color: '#555' }}>
      Selecciona una generación arriba o visita a los Digimon.
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f5f6fa' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gen1" element={<PokemonList min={1} max={151} />} />
          <Route path="/gen2" element={<PokemonList min={152} max={251} />} />
          <Route path="/gen3" element={<PokemonList min={252} max={386} />} />
          <Route path="/digimon" element={<DigimonList />} />
          
          {/* ✅ Ruta 404 (para URLs incorrectas) usando el mismo diseño */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;