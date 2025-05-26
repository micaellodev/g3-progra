import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import CategoriasDestacadas from '../../components/inicio/CategoriasDestacadas';
import ProductosMasVendidos from '../../components/inicio/ProductosMasVendidos';
import SeriesNuevas from '../../components/inicio/SeriesNuevas';
import ProductosNuevos from '../../components/inicio/ProductosNuevos';
import BannerPublicidad from '../../components/inicio/BannerPublicidad';
import Footer from '../../components/Footer/Footer'; // Importa el Footer


export const Inicio = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
    // Aquí podrías agregar la lógica para realizar la búsqueda o redireccionar a resultados
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      <CategoriasDestacadas />
      <ProductosMasVendidos />
      <SeriesNuevas />
      <ProductosNuevos />
      <BannerPublicidad />
      <Footer />
    </>
  );
};

export default Inicio;
