import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';  
import OrdenDetalleCard from '../../components/Table/OrdenDetalleCard';
import { obtenerOrdenPorId } from '../../services/listaOrdenesService';

const DetalleOrden = () => {
  const { id } = useParams();
  const [busqueda, setBusqueda] = useState('');
  const [orden, setOrden] = useState(null);

  useEffect(() => {
    const fetchOrden = async () => {
      const data = await obtenerOrdenPorId(id);
      setOrden(data);
    };
    fetchOrden();
  }, [id]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  if (!orden) {
    return <p>Orden no encontrada</p>;
  }

  return (
    <>
      <TopBarAdmin busqueda={busqueda} setBusqueda={setBusqueda} handleSearch={handleSearch} />
      <h1 style={{ margin: '20px 30px' }}>Detalle de la Orden</h1>
      <OrdenDetalleCard orden={orden} />
    </>
  );
};

export default DetalleOrden;
