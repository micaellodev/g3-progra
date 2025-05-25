import React from 'react';
import './BannerPublicidad.css'; // Estilos separados para mantener limpio el componente

const BannerPublicidad = () => {
  return (
    <section className="banner-publicidad">
      <div className="banner-overlay">
        <img
          src="/Banner.jpg"
          alt="Publicidad"
          className="banner-imagen"
        />
        <div className="banner-texto">
          ¡Ofertas especiales esta semana!
        </div>
      </div>
    </section>
  );
};

export default BannerPublicidad;
