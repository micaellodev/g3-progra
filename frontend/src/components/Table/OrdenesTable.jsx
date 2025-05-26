import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListaOrden.module.css';

const OrdenesTable = ({ ordenes = [] }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.productosTable}>
        <thead>
          <tr>
            <th>#ORDEN</th>
            <th>Usuario</th>
            <th>Fecha Orden</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((orden) => (
            <tr key={orden.id}>
              <td>{orden.id.toString().padStart(4, '0')}</td>
              <td>{orden.usuario}</td>
              <td>{orden.fecha}</td>
              <td>S/ {orden.total.toFixed(2)}</td>
              <td>{orden.estado}</td>
              <td>
                <button
                  className={styles.verDetalleBtn}
                  onClick={() => navigate(`/admin/ordenes/${orden.id}`)}
                >
                  Ver Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdenesTable;
