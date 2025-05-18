import { useState } from 'react';

function Inicio() {
  const [busqueda, setBusqueda] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar juego"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      />

      {/* Subtítulo: Categoría */}
      <h2>Categoría de juego</h2>
      {/* Aquí puedes luego mapear categorías */}

      {/* Subtítulo: Más vendidos */}
      <h2 style={{ marginTop: '30px' }}>Juegos más vendidos</h2>
      {/* Aquí puedes luego mostrar los juegos más vendidos */}
    </div>
  );
}

export default Inicio;
