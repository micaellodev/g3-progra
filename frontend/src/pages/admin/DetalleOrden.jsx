// src/pages/DetalleOrden.jsx

import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import OrdenDetalleCard from '../../components/Table/OrdenDetalleCard';
import { ordenes } from '../../constantes/Consts'; 

export const DetalleOrden = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando orden:', busqueda);
  };

  const orden = ordenes[0]; 

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1 style={{ margin: '20px 30px' }}>Detalle de la Orden</h1>
      <OrdenDetalleCard orden={orden} />
    </>
  );
};

export default DetalleOrden;
