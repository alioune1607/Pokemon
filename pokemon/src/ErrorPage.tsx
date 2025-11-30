import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#e74c3c' }}>
      <h1>¡Ups! Algo salió mal (404)</h1>
      <img 
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" 
        alt="Error Team Rocket" 
        style={{ width: '300px', borderRadius: '10px', border: '2px solid #e74c3c' }}
      />
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        No se encontraron los datos o la página no existe.
      </p>
    </div>
  );
};

export default ErrorPage;