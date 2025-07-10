import React, { useEffect, useState } from 'react';
import '../../styles/CategoriasDestacadas.css';
import { getCategorias } from '../../services/CategoriaService';

const CategoriasDestacadas = () => {
  const [categoriasDestacadas, setCategoriasDestacadas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const todas = await getCategorias();
        setCategoriasDestacadas(todas.slice(0, 3));
      } catch (err) {
        console.error('Error cargando categorías destacadas:', err);
      }
    })();
  }, []);
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