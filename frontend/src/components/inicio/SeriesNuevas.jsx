import React from 'react';

const series = ['The Last of Us', 'Halo', 'Castlevania'];

const SeriesNuevas = () => {
  return (
    <section>
      <h2>Series Nuevas</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {series.map((serie, idx) => (
          <div key={idx} style={{ border: '1px solid #aaa', padding: '1rem' }}>
            <h3>{serie}</h3>
            <p>Disponible ahora</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeriesNuevas;
