// src/components/ProductoDetalleCard.jsx

import React from 'react';
import styles from './ProductoDetalleCard.module.css';  

const ProductoDetalleCard = ({ producto }) => {
  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
      <div className={styles.info}>
        <h2>{producto.nombre}</h2>
        <hr />
        <p className={styles.presentacion}><strong>Presentación:</strong> {producto.presentacion}</p>
        <p className={styles.descripcion}>{producto.descripcion}</p>
        <div className={styles.footer}>
          <span className={styles.precio}>s/ {producto.precio.toFixed(2)} x unidad</span>
          <button className={styles.botonAgregar}>
            🛒 AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalleCard;
