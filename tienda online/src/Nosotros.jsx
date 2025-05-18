// src/Nosotros.jsx
import React from 'react';

function Nosotros() {
  return (
    <div style={{ padding: '40px' }}>
      <h2>¿Quiénes somos?</h2>
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        borderRadius: '8px',
        border: '1px solid #ccc'
      }}>
        <p>
          <strong>PuntoGG</strong> es una tienda virtual especializada en la venta de videojuegos digitales para todas las plataformas.
          Nos apasiona el mundo gamer y buscamos ofrecer la mejor experiencia de compra online, con precios accesibles, entregas instantáneas
          y un catálogo siempre actualizado con los títulos más populares y esperados. En PuntoGG, jugar es solo el comienzo.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
