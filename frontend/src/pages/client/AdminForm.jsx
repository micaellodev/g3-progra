import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminForm() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', color: 'black' }}>
      <h1>Página de Admin</h1>
      <p>Selecciona una opción:</p>

      <button
        onClick={() => navigate('/listacategoria')}
        style={{
          padding: '10px 20px',
          marginTop: '10px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Categorías
      </button>
    </div>
  );
}

export default AdminForm;
