import React from 'react';
import styles from '../../styles/OrdenCompletada.module.css';

const DetallesProductos = ({ productos, calcularTotal }) => {
  return (
    <div className={styles.detallesCompra}>
      <h2>Detalles de la compra</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} className={styles.producto}>
            <img src={producto.imagen} className={styles.imagenProducto} />
            <span>{producto.nombre}</span>
            <span>Cantidad: {producto.quantity}</span>
            <span>Precio: S/. {producto.precio.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <strong>Total:</strong> S/. {calcularTotal().toFixed(2)}
      </div>
    </div>
  );
};

export default DetallesProductos;