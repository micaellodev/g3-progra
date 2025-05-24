import React from 'react';
import styles from '../../styles/Carrito.module.css';
import CarritoItemCard from './CarritoItemCard';

function CarritoItems({ juegos }) {
  return (
    <div className={styles.itemsBox}>
      {juegos.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        juegos.map((juego) => (
          <CarritoItemCard key={juego.id} juego={juego} />
        ))
      )}
    </div>
  );
}

export default CarritoItems;

