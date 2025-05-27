import React from 'react';
import '../../styles/CategoriasDestacadas.css';

const categorias = ['Consolas', 'Juegos Retro', 'Accesorios'];

const CategoriasDestacadas = () => {
  return (
    <section className="categorias-section">
      <h2 className="categorias-titulo">Categorías Destacadas</h2>
      <div className="categorias-container">
        {categorias.map((cat, idx) => (
          <div key={idx} className="categoria-card">
            <h3>{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasDestacadas;
