// src/components/Carrito/CarritoItemCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../hooks/CartContext';
import styles from '../../styles/Carrito.module.css';

const CarritoItemCard = ({ juego }) => {
  const { addToCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = Math.min(parseInt(e.target.value, 10), juego.stock); // Limita al stock disponible
    addToCart(juego, newQuantity - juego.quantity); // Actualiza la cantidad en el carrito
  };

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
          <input
            type="number"
            min="1"
            max={juego.stock} // Limita la cantidad máxima al stock disponible
            value={juego.quantity}
            onChange={handleQuantityChange} // Maneja el cambio de cantidad
          />
        </div>
      </div>

      <div className={styles.juegoPrecio}>
        S/ {juego.precio.toFixed(2)}
      </div>
    </div>
  );
};

export default CarritoItemCard;
