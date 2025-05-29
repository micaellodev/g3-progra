import React, { useState } from 'react';
import TopBarAdmin from '../../components/TopBar/TopBarAdmin';
import BuscadorConBotones from '../../components/Lista/BuscadorConBotones';
import ProductosTable from '../../components/Table/ProductosTable';

export const ListaProducto = () => {
  const [busquedaTopbar, setBusquedaTopbar] = useState('');
  const [busquedaTabla, setBusquedaTabla] = useState('');

  const handleSearchTopbar = (e) => {
    e.preventDefault();
    console.log('Buscando desde topbar:', busquedaTopbar);
  };

  const handleSearchTabla = (e) => {
    e.preventDefault();
    console.log('Buscando en productos:', busquedaTabla);
  };

  return (
    <>
      <TopBarAdmin
        handleSearch={handleSearchTopbar}
        busqueda={busquedaTopbar}
        setBusqueda={setBusquedaTopbar}
      />

      <h1>Lista Producto</h1>

      <BuscadorConBotones
        busqueda={busquedaTabla}
        setBusqueda={setBusquedaTabla}
        handleSearch={handleSearchTabla}
      />

      <ProductosTable busqueda={busquedaTabla} />
    </>
  );
};

export default ListaProducto;
