import React from 'react';
import '../../styles/productos-mas-vendidos.css';
import { juegos } from '../../constantes/Consts';
import { useCarrito } from '../../hooks/CartContext';
import { Link } from 'react-router-dom';

const ProductosMasVendidos = () => {
  const { addToCart } = useCarrito();

  return (
    <section className="mas-vendidos-section">
      <h2 className="mas-vendidos-titulo">Más Vendidos del Mes</h2>
      <div className="mas-vendidos-grid">
        {juegos.slice(0, 12).map((prod) => (
          <div key={prod.id} className="producto-card">
            {/* Link para ver el detalle */}
            <Link to={`/producto/${prod.id}`} className="producto-info-link">
              <h4>{prod.nombre}</h4>
              <p>S/ {prod.precio.toFixed(2)}</p>
            </Link>

            {/* Botón separado para agregar al carrito */}
            <button onClick={() => addToCart(prod)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosMasVendidos;
