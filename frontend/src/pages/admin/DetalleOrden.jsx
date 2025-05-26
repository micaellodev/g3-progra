import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import OrdenDetalleCard from '../../components/Table/OrdenDetalleCard';
import { ordenes } from '../../constantes/consts'; 

const DetalleOrden = () => {
  const { id } = useParams();
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando orden:', busqueda);
  };

  const orden = ordenes.find(o => o.id.toString() === id);

  if (!orden) {
    return <p>Orden no encontrada</p>;
  }

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1 style={{ margin: '20px 30px' }}>Detalle de la Orden</h1>
      <OrdenDetalleCard orden={orden} />
    </>
  );
};

export default DetalleOrden;
