import React, { useContext } from 'react';
import { CartContext } from '../../hooks/CartContext';
import CarritoItemCard from './CarritoItemCard';
import styles from '../../styles/Carrito.module.css';

const CarritoItems = () => {
  const { cart } = useContext(CartContext); // Consume el contexto del carrito

  return (
    <div className={styles.itemsBox}>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((juego) => (
          <CarritoItemCard key={juego.id} juego={juego} /> // Pasa cada ítem como prop
        ))
      )}
    </div>
  );
};

export default CarritoItems;

