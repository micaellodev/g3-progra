import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListaOrden.module.css';

const OrdenesTable = ({ ordenes = [] }) => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');

  const ordenesFiltradas = ordenes.filter((orden) =>
    (orden.usuario || '').toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      {/* Tabla de órdenes */}
      <div className={styles.tableWrapper}>
        <table className={styles.ordenesTable}>
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
            {ordenesFiltradas.map((orden) => (
              <tr key={orden.id}>
                <td>{orden.id.toString().padStart(4, '0')}</td>
                <td>{orden.usuario}</td>
                <td>{orden.fecha}</td>
                <td>S/ {orden.total.toFixed(2)}</td>
                <td
                  className={
                    orden.estado === 'Entregado'
                      ? styles.estadoEntregado
                      : styles.estadoPorEntregar
                  }
                >
                  {orden.estado}
                </td>
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
    </>
  );
};

export default OrdenesTable;
