import React from 'react';
import '../../styles/series-nuevas.css';

const series = ['The Last of Us', 'Halo', 'Castlevania'];

const SeriesNuevas = () => {
  return (
    <section className="series-nuevas-section">
      <h2 className="series-nuevas-titulo">Series Nuevas</h2>
      <div className="series-nuevas-grid">
        {series.map((serie, idx) => (
          <div key={idx} className="serie-card">
            <h3>{serie}</h3>
            <p>Disponible ahora</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeriesNuevas;
