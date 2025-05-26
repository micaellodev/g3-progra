import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorOrdenes from '../../components/Lista/BuscadorOrdenes';
import OrdenesTable from '../../components/Table/OrdenesTable';
import { ordenes } from '../../constantes/consts'; // Importa tu lista de órdenes reales o simuladas
// No importamos Footer si no quieres mostrarlo

const ListaOrdenes = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando orden:', busqueda);
  };

  // Filtrar órdenes por algún campo, por ejemplo, número o cliente
    const ordenesFiltradas = ordenes.filter(o =>
    o.id?.toString().includes(busqueda.toLowerCase()) ||  // El signo ? evita error si es undefined
    o.usuario?.toLowerCase().includes(busqueda.toLowerCase())
    );


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
