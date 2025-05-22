import React from 'react';
import styles from '../../styles/Carrito.module.css';

function CarritoItems({ juegos }) {
  return (
    <div className={styles.itemsBox}>
      {juegos.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        juegos.map((juego) => (
          <div key={juego.id} className={styles.juegoItem}>
            <span>{juego.nombre}</span>
            <span>S/. {juego.precio.toFixed(2)}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default CarritoItems;
