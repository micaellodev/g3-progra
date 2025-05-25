import React from 'react';
import Footer from '../../components/Footer/Footer';

export const Nosotros = () => {
  return (
    <div>
      <h2>¿Quiénes somos?</h2>
      <div>
        <p>
          <strong>PuntoGG</strong> Es una tienda virtual especializada en la venta de videojuegos digitales para todas las plataformas.
          Nos apasiona el mundo gamer y buscamos ofrecer la mejor experiencia de compra online, con precios accesibles, entregas instantáneas
          y un catálogo siempre actualizado con los títulos más populares y esperados. En PuntoGG, jugar es solo el comienzo.
        </p>
      </div>

      {/* Agrega el footer aquí */}
      <Footer />
    </div>
  );
};

export default Nosotros;
