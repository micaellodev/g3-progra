// src/pages/DetalleProducto.jsx

import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import ProductoDetalleCard from '../../components/Table/ProductoDetalleCard';
import { juegos } from '../../constantes/consts';

export const DetalleProducto = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  const producto = juegos[0]; 

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
      <h1 style={{ margin: '20px 30px' }}>Detalle del Producto</h1>
      <ProductoDetalleCard producto={producto} />
    </>
  );
};

export default DetalleProducto;
