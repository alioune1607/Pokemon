import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navStyle: React.CSSProperties = {
    padding: '1rem',
    backgroundColor: '#2c3e50',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  };

  // Función para calcular el estilo de cada link
  const getLinkStyle = (isActive: boolean, isDigimon: boolean = false): React.CSSProperties => {
    return {
      color: isDigimon ? '#f1c40f' : 'white', // Digimon amarillo, resto blanco
      textDecoration: 'none',
      fontWeight: 'bold',
      paddingBottom: '5px',
      // Aquí está la magia: si está activo, ponemos borde abajo (subrayado)
      borderBottom: isActive ? `3px solid ${isDigimon ? '#f1c40f' : 'white'}` : '3px solid transparent',
      transition: 'border-bottom 0.3s ease'
    };
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0, color: 'white', marginRight: '20px' }}>PokeDigiDex</h2>
      
      {/* Usamos NavLink y su prop 'style' que recibe una función con { isActive } */}
      <NavLink to="/" style={({ isActive }) => getLinkStyle(isActive)}>
        INICIO
      </NavLink>

      <NavLink to="/gen1" style={({ isActive }) => getLinkStyle(isActive)}>
        Gen 1
      </NavLink>

      <NavLink to="/gen2" style={({ isActive }) => getLinkStyle(isActive)}>
        Gen 2
      </NavLink>

      <NavLink to="/gen3" style={({ isActive }) => getLinkStyle(isActive)}>
        Gen 3
      </NavLink>

      <NavLink to="/digimon" style={({ isActive }) => getLinkStyle(isActive, true)}>
        DIGIMON
      </NavLink>
    </nav>
  );
};

export default Navbar;