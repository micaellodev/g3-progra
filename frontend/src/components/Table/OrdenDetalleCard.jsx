import React from 'react';
import styles from './OrdenDetalleCard.module.css';

const OrdenDetalleCard = ({ orden }) => {
  return (
    <div className={styles.card}>
      <h2>Orden #{orden.id}</h2>
      <p><strong>Estado:</strong> {orden.estado}</p>
      <p><strong>Total:</strong> S/ {orden.total.toFixed(2)}</p>

      <h3>Productos ordenados</h3>
      <table className={styles.productosTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Total (S/.)</th>
          </tr>
        </thead>
        <tbody>
          {orden.productos.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>{prod.cantidad}</td>
              <td>{(prod.cantidad * prod.precio).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdenDetalleCard;
