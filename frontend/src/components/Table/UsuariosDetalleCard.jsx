import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UsuariosDetalleCard.module.css';

const UsuariosDetalleCard = ({ usuario }) => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h2>{usuario.nombre}</h2>
          <hr />
          <p><strong>Correo:</strong> {usuario.correo || 'No disponible'}</p>
          <p><strong>Fecha de registro:</strong> {usuario.fechaRegistro}</p>
          <p><strong>Estado:</strong> {usuario.estado}</p>
        </div>
        {usuario.foto && (
          <img
            src={usuario.foto}
            alt="Foto del usuario"
            className={styles.foto}
          />
        )}
      </div>

      {usuario.ordenes && usuario.ordenes.length > 0 && (
        <div className={styles.ordenes}>
          <h3>Órdenes recientes</h3>
          <table className={styles.tablaOrdenes}>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Fecha</th>
                <th>Total (S/.)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuario.ordenes.map((orden) => (
                <tr key={orden.id}>
                  <td>{orden.id}</td>
                  <td>{orden.fecha}</td>
                  <td>{orden.total}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/admin/ordenes/${orden.id}`)}
                      className={styles.botonDetalle}
                    >
                      Ver detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsuariosDetalleCard;
