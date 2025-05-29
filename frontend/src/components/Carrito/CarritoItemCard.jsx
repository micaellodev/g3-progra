// src/components/Carrito/CarritoItemCard.jsx
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../hooks/CartContext';
import styles from '../../styles/Carrito.module.css';

const CarritoItemCard = ({ juego }) => {
  const { addToCart, removeFromCart, selectedIds, updateSelectedIds } = useContext(CartContext);
  const [isSelected, setIsSelected] = useState(selectedIds.includes(juego.id));

  // Sincroniza el estado local con el contexto si cambia desde fuera
  useEffect(() => {
    setIsSelected(selectedIds.includes(juego.id));
  }, [selectedIds, juego.id]);

  const handleQuantityChange = (e) => {
    const newQuantity = Math.min(parseInt(e.target.value, 10), juego.stock);
    addToCart(juego, newQuantity - juego.quantity);
    // Si está seleccionado, asegura que el ID siga en el contexto
    if (isSelected && !selectedIds.includes(juego.id)) {
      updateSelectedIds([...selectedIds, juego.id]);
    }
  };

  const handleSelectionChange = (e) => {
    const checked = e.target.checked;
    setIsSelected(checked);
    if (checked) {
      // Agrega el ID al contexto si no está
      if (!selectedIds.includes(juego.id)) {
        updateSelectedIds([...selectedIds, juego.id]);
      }
    } else {
      // Quita el ID del contexto si está
      updateSelectedIds(selectedIds.filter(id => id !== juego.id));
    }
  };

  const handleRemove = () => {
    removeFromCart(juego.id);
    // Quita el ID del contexto si está seleccionado
    if (selectedIds.includes(juego.id)) {
      updateSelectedIds(selectedIds.filter(id => id !== juego.id));
    }
  };

  return (
    <div className={styles.juegoItem}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleSelectionChange}
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
            max={juego.stock}
            value={juego.quantity}
            onChange={handleQuantityChange}
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
