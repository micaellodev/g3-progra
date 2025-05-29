import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Carrito.module.css';

function CarritoResumen({ juegos, botonTexto = "Continuar compra", botonRuta = "/checkout" }) {
  const total = juegos.reduce((acc, j) => acc + j.precio, 0);
  const descuento = 0;
  const totalFinal = total - descuento;

  return (
    <div className={styles.resumenBox}>
      <h2>Resumen de compra</h2>
      <div className={styles.resumenFila}>
        <span>Juegos ({juegos.length})</span>
        <span>S/. {total.toFixed(2)}</span>
      </div>
      <div className={styles.resumenFila}>
        <span>Descuentos</span>
        <span>-S/. {descuento.toFixed(2)}</span>
      </div>
      <div className={styles.totalFila}>
        <span>Total</span>
        <span>S/. {totalFinal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CarritoResumen;