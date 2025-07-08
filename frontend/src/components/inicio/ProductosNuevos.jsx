import React from 'react';
import '../../styles/productos-nuevos.css';
import { juegos } from '../../constantes/Consts';
import { useCarrito } from '../../hooks/CartContext';
import { Link } from 'react-router-dom';

const productosNuevos = juegos.slice(-4);

const ProductosNuevos = () => {
  const { addToCart } = useCarrito();

  return (
    <section className="categorias-section">
      <h2 className="categorias-titulo">Productos Nuevos</h2>
      <div className="categorias-container">
        {productosNuevos.map((juego) => (
          <div key={juego.id} className="categoria-card">
            <Link to={`/producto/${juego.id}`} className="producto-info-link">
              <img
                src={juego.imagen}
                alt={juego.nombre}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h3>{juego.nombre}</h3>
              <p>S/ {juego.precio.toFixed(2)}</p>
            </Link>
            <button
              onClick={() => addToCart(juego)}
              className="btn-agregar"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosNuevos;
