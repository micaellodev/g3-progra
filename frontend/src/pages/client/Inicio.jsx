// pages/client/inicio.jsx
import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar'; // ¡Esta importación está bien!

export const Inicio = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
    // Aquí es donde iría la lógica para filtrar productos o realizar la búsqueda
  };

  return (
    <>
<<<<<<< HEAD
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
      
=======
      {/* El TopBar se renderiza aquí, dentro de Inicio */}
      <TopBar
        handleSearch={handleSearch}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
>>>>>>> b18c9d8 (commit Marcelo)
      <h1>Inicio</h1>
      {/* Aquí irá el resto del contenido de tu página de inicio, como listados de productos, etc. */}
    </>
  );
};

export default Inicio;