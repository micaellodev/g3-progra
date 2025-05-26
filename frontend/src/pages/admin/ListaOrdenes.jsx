import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorOrdenes from '../../components/Lista/BuscadorOrdenes';
import OrdenesTable from '../../components/Table/OrdenesTable';
import { ordenes } from '../../constantes/consts';

const ListaOrdenes = () => {
  const [busqueda, setBusqueda] = useState('');
  const [ordenesFiltradas, setOrdenesFiltradas] = useState(ordenes); // estado separado

  const handleSearch = (e) => {
    e.preventDefault();
    const resultado = ordenes.filter((o) =>
      o.id?.toString().includes(busqueda.toLowerCase()) ||
      o.usuario?.toLowerCase().includes(busqueda.toLowerCase())
    );
    setOrdenesFiltradas(resultado); // solo se actualiza al presionar "Buscar"
  };

  return (
    <>
      <TopBarAdmin busqueda={busqueda} setBusqueda={setBusqueda} />
      <h1>Lista de Órdenes</h1>
      <BuscadorOrdenes
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        handleSearch={handleSearch}
      />
      <OrdenesTable ordenes={ordenesFiltradas} />
    </>
  );
};

export default ListaOrdenes;
