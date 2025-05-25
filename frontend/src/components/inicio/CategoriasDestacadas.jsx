import React from 'react';

const categorias = ['Consolas', 'Juegos Retro', 'Accesorios'];

const CategoriasDestacadas = () => {
  return (
    <section>
      <h2>Categorías Destacadas</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {categorias.map((cat, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasDestacadas;
