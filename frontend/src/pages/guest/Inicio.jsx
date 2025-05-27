import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import CategoriasDestacadas from '../../components/inicio/CategoriasDestacadas';
import ProductosMasVendidos from '../../components/inicio/ProductosMasVendidos';
import SeriesNuevas from '../../components/inicio/SeriesNuevas';
import ProductosNuevos from '../../components/inicio/ProductosNuevos';
import BannerPublicidad from '../../components/inicio/BannerPublicidad';
import Footer from '../../components/Footer/Footer';
import '../../styles/inicio.css';

export const Inicio = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />

      <div className="inicio-section">
        <div className="inicio-content">
          <CategoriasDestacadas />
          <ProductosMasVendidos />
          <SeriesNuevas />
          <ProductosNuevos />
        </div>
      </div>

      <BannerPublicidad />
      <Footer />
    </>
  );
};

export default Inicio;
