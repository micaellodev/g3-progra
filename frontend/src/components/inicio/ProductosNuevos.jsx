import React from 'react';
import '../../styles/productos-nuevos.css';
import { useCarrito } from '../../hooks/CartContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductos } from '../../services/ProductoService';

const ProductosNuevos = () => {
  const { addToCart } = useCarrito();
  const [productosNuevos, setProductosNuevos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const todos = await fetchProductos();
        // Ordenar por createdAt descendente
        const ordenados = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProductosNuevos(ordenados.slice(0, 4));
      } catch (err) {
        console.error('Error cargando productos nuevos:', err);
      }
    })();
  }, []);


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
