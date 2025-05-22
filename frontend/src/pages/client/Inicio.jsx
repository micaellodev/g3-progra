import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';

export const Inicio = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
    // Aquí puedes hacer algo con el valor de búsqueda
  };
  
  return (
    <>
      <TopBar
        handleSearch={handleSearch}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <h1>Inicio</h1>
    </>
  );
};

export default Inicio;
