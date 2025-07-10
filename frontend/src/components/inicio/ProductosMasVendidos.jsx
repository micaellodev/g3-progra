import React from 'react';
import '../../styles/productos-mas-vendidos.css';
import { useCarrito } from '../../hooks/CartContext';
import { useEffect, useState } from 'react';
import { fetchProductos } from '../../services/ProductoService';
import { Link } from 'react-router-dom';

const ProductosMasVendidos = () => {
  const { addToCart } = useCarrito();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const todos = await fetchProductos();
        // Suponiendo que los más vendidos tienen mayor número de ventas (no disponible)
        // Usaremos stock como proxy inverso o simplemente aleatorio por ahora
        const ordenados = [...todos].sort((a, b) => (b.stock || 0) - (a.stock || 0));
        setProductos(ordenados.slice(0, 12));
      } catch (err) {
        console.error('Error cargando productos más vendidos:', err);
      }
    })();
  }, []);

  return (
    <section className="mas-vendidos-section">
      <h2 className="mas-vendidos-titulo">Más Vendidos del Mes</h2>
      <div className="mas-vendidos-grid">
        {productos.map((prod) => (
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
