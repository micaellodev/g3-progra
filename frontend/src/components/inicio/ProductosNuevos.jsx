import React from 'react';
import '../../styles/productos-nuevos.css';

const productos = Array.from({ length: 6 }, (_, i) => ({
  nombre: `Nuevo Producto #${i + 1}`,
  img: '/half-life.jpg',
}));

const ProductosNuevos = () => {
  return (
    <section className="productos-nuevos-section">
      <h2>Productos Nuevos</h2>
      <div className="contenedor-productos-nuevos">
        {productos.map((prod, idx) => (
          <div key={idx} className="tarjeta-producto-nuevo">
            <img src={prod.img} alt={prod.nombre} />
            <p>{prod.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosNuevos;
