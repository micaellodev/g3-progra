import React from 'react';
import '../../styles/productos-nuevos.css';
import { juegos } from '../../constantes/Consts'; // Paso 1

const ultimosJuegos = juegos.slice(-6); // Paso 2

const ProductosNuevos = () => {
  return (
    <section className="productos-nuevos-section">
      <h2>Productos Nuevos</h2>
      <div className="contenedor-productos-nuevos">
        {ultimosJuegos.map((juego) => (
          <div key={juego.id} className="tarjeta-producto-nuevo">
            <img src={juego.imagen} alt={juego.nombre} />
            <p>{juego.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductosNuevos;
