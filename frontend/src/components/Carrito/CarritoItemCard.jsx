// src/components/Carrito/CarritoItemCard.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../../hooks/CartContext';
import styles from '../../styles/Carrito.module.css';

const CarritoItemCard = ({ juego, onSelectionChange }) => {
  const { addToCart, removeFromCart } = useContext(CartContext); // Obtiene la función para eliminar del carrito
  const [isSelected, setIsSelected] = useState(false); // Estado para controlar si el producto está seleccionado

  const handleQuantityChange = (e) => {
    const newQuantity = Math.min(parseInt(e.target.value, 10), juego.stock); // Limita al stock disponible
    addToCart(juego, newQuantity - juego.quantity); // Actualiza la cantidad en el carrito
  };

  const handleSelectionChange = (e) => {
    setIsSelected(e.target.checked); // Actualiza el estado local
    onSelectionChange(juego.id, e.target.checked); // Notifica al componente padre sobre el cambio
  };

  const handleRemove = () => {
    removeFromCart(juego.id); // Elimina el producto del carrito
  };

  return (
    <div className={styles.juegoItem}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleSelectionChange} // Maneja el cambio de selección
        />
      </div>
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
          <button onClick={handleRemove} className={styles.botonEliminar}>
            Eliminar
          </button>
        </div>
      </div>

      <div className={styles.juegoPrecio}>
        S/ {juego.precio.toFixed(2)}
      </div>

      
    </div>
  );
};

export default CarritoItemCard;
