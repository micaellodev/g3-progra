import React from 'react';
import '../../styles/productos-mas-vendidos.css';

const productos = Array.from({ length: 12 }, (_, i) => ({
  nombre: `Producto #${i + 1}`,
  precio: (10 + i) * 3,
}));

const ProductosMasVendidos = () => {
  return (
    <section className="mas-vendidos-section">
      <h2 className="mas-vendidos-titulo">Más Vendidos del Mes</h2>
      <div className="mas-vendidos-grid">
        {productos.map((prod, idx) => (
          <div key={idx} className="producto-card">
            <h4>{prod.nombre}</h4>
            <p>S/ {prod.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosMasVendidos;
