import React from 'react';

function AtrasBoton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '8px 16px',
        margin: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      ← Atrás
    </button>
  );
}

export default AtrasBoton;