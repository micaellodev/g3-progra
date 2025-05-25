// src/components/OrdenDetalleCard.jsx

import React from 'react';
import styles from './OrdenDetalleCard.module.css';

const OrdenDetalleCard = ({ item }) => {
  // item: { producto: { nombre, imagen, precio }, cantidad }

  const total = item.cantidad * item.producto.precio;

  return (
    <div className={styles.card}>
      <img src={item.producto.imagen} alt={item.producto.nombre} className={styles.imagen} />
      <div className={styles.info}>
        <h2>{item.producto.nombre}</h2>
        <hr />
        <p><strong>Cantidad:</strong> {item.cantidad}</p>
        <p><strong>Precio unitario:</strong> s/ {item.producto.precio.toFixed(2)}</p>
        <p className={styles.total}><strong>Total:</strong> s/ {total.toFixed(2)}</p>
      </div>
    </div>
  ); 
  
};

export default OrdenDetalleCard;
