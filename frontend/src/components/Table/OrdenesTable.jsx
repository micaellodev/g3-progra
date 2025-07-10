import React from 'react';
import styles from './ListaOrdenes.module.css';
import { useNavigate } from 'react-router-dom';

const OrdenesTable = ({ ordenes = [] }) => {
  const navigate = useNavigate();

  const handleVerDetalle = (id) => {
    navigate(`/admin/ordenes/${id}`);
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.ordenesTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((orden) => (
            <tr key={orden.id}>
              <td>{orden.id}</td>
              <td>{orden.usuario}</td> {/* Corregido: era "cliente" */}
              <td>{new Date(orden.fecha).toLocaleDateString('es-PE')}</td>
              <td>S/ {parseFloat(orden.total).toFixed(2)}</td>
              <td>{orden.estado}</td>
              <td>
                <button
                  className={styles.verBtn}
                  onClick={() => handleVerDetalle(orden.id)}
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
