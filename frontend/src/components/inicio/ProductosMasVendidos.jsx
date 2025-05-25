import React from 'react';

const productos = Array.from({ length: 12 }, (_, i) => ({
  nombre: `Producto #${i + 1}`,
  precio: (10 + i) * 3,
}));

const ProductosMasVendidos = () => {
  return (
    <section>
      <h2>Más Vendidos del Mes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
        {productos.map((prod, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <h4>{prod.nombre}</h4>
            <p>S/ {prod.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosMasVendidos;
