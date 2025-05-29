import React, { useState } from 'react';
import CarritoItemCard from './CarritoItemCard';
import styles from '../../styles/Carrito.module.css';

const CarritoItems = ({ juegos, onSelectedItemsChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = (id, isSelected) => {
    const updatedItems = isSelected
      ? [...selectedItems, id] // Agrega el ID del producto seleccionado
      : selectedItems.filter((itemId) => itemId !== id); // Elimina el ID del producto deseleccionado

    setSelectedItems(updatedItems);
    onSelectedItemsChange(updatedItems); // Notifica al componente padre sobre los productos seleccionados
  };

  return (
    <div className={styles.itemsBox}>
      {juegos.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        juegos.map((juego) => (
          <CarritoItemCard
            key={juego.id}
            juego={juego}
            onSelectionChange={handleSelectionChange} // Pasa la función al componente hijo
          />
        ))
      )}
    </div>
  );
};

export default CarritoItems;

