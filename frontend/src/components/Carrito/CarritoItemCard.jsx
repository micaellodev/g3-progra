// src/components/Carrito/CarritoItemCard.jsx
import React from 'react';
import styles from '../../styles/Carrito.module.css';

const CarritoItemCard = ({ juego }) => {
  return (
    <div className={styles.juegoItem}>
      <div className={styles.juegoImagen}>
        <img src={juego.imagen} alt={juego.nombre} className={styles.juegoImagen} />
      </div>
      
      <div className={styles.juegoInfo}>
        <div className={styles.infoNombre}>
          <div className={styles.juegoNombre}>{juego.nombre}</div>
          <div className={styles.juegoPresentacion}>{juego.presentacion}</div>
        </div>
        <div className={styles.infoCantidad}>
          <label>Cantidad:</label>
          <input type="number" min="0" defaultValue={1} max='3'/>
        </div>
      </div>

      <div className={styles.juegoPrecio}>
        S/ {juego.precio.toFixed(2)}
      </div>
    </div>
  );
};

export default CarritoItemCard;
