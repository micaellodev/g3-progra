import React from 'react';

const productos = Array.from({ length: 6 }, (_, i) => ({
  nombre: `Nuevo Producto #${i + 1}`,
  img: '/half-life.jpg',
}));

const ProductosNuevos = () => {
  return (
    <section>
      <h2>Productos Nuevos</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {productos.map((prod, idx) => (
          <div key={idx} style={{ width: '150px', textAlign: 'center' }}>
            <img src={prod.img} alt={prod.nombre} style={{ width: '100%' }} />
            <p>{prod.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosNuevos;
