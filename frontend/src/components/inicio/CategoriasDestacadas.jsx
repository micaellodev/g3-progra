import React from 'react';
import '../../styles/CategoriasDestacadas.css';
import { categorias } from '../../constantes/Consts';

const categoriasDestacadas = categorias.slice(0, 3);

const CategoriasDestacadas = () => {
  return (
    <section className="categorias-section">
      <h2 className="categorias-titulo">Categorías Destacadas</h2>
      <div className="categorias-container">
        {categoriasDestacadas.map((cat) => (
          <div key={cat.id} className="categoria-card">
            <h3>{cat.nombre}</h3>
            <p>{cat.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasDestacadas;