import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import TopBar from '../../components/TopBar/TopBar';

export const Nosotros = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', busqueda);

  };

  return (
    <div>

      <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
      

      <div style={{ padding: '20px' }}>
        <h2>¿Quiénes somos?</h2>
        <p>
          <strong>PuntoGG</strong> es una tienda virtual especializada en la venta de videojuegos digitales para todas las plataformas.
          Nos apasiona el mundo gamer y buscamos ofrecer la mejor experiencia de compra online, con precios accesibles, entregas instantáneas
          y un catálogo siempre actualizado con los títulos más populares y esperados. En PuntoGG, jugar es solo el comienzo.
        </p>
      </div>


      <Footer />
    </div>
  );
};

export default Nosotros;

