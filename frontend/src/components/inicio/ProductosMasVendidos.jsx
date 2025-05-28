import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/productos-mas-vendidos.css';
import { juegos } from '../../constantes/Consts';  // Importa el array juegos

const ProductosMasVendidos = () => {
  return (
    <section className="mas-vendidos-section">
      <h2 className="mas-vendidos-titulo">Más Vendidos del Mes</h2>
      <div className="mas-vendidos-grid">
        {juegos.map((prod) => (
          <Link
            key={prod.id}
            to={`/producto/${prod.id}`}
            className="producto-card"
          >
            <h4>{prod.nombre}</h4>
            <p>S/ {prod.precio.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductosMasVendidos;
