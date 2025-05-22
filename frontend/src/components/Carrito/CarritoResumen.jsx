import React from 'react';
import styles from '../../styles/Carrito/Carrito.module.css';

function CarritoResumen({ juegos }) {
  const total = juegos.reduce((acc, j) => acc + j.precio, 0);
  const descuento = 0; // Puedes aplicar lógica si deseas
  const totalFinal = total - descuento;

  return (
    <div className={styles.resumenBox}>
      <h3>Resumen de compra</h3>
      <div className={styles.resumenFila}>
        <span>Juegos ({juegos.length})</span>
        <span>S/. {total.toFixed(2)}</span>
      </div>
      <div className={styles.resumenFila}>
        <span>Descuentos</span>
        <span>-S/. {descuento.toFixed(2)}</span>
      </div>
      <hr />
      <div className={styles.totalFila}>
        <span>Total</span>
        <span>S/. {totalFinal.toFixed(2)}</span>
      </div>
      <button className={styles.botonCompra} onClick={() => alert('Continuar compra')}>
        Continuar compra
      </button>
    </div>
  );
}

export default CarritoResumen;
