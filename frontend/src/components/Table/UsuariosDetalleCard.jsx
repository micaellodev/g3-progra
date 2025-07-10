import React from 'react';
import styles from './UsuariosDetalleCard.module.css';

const UsuariosDetalleCard = ({ usuario }) => {
  if (!usuario) return <p>No se encontró información del usuario.</p>;

  return (
    <div className={styles.card}>
      <div className={styles.usuarioInfo}>
        <img
          src={usuario.foto || '/img/usuario-generico.png'}
          alt="Foto del usuario"
          className={styles.usuarioFoto}
        />
        <div className={styles.detalles}>
          <h2>{usuario.nombre}</h2>
          <p><strong>ID:</strong> {usuario.id}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
          <p><strong>Estado:</strong> {usuario.estado}</p>
        </div>
      </div>

      <div className={styles.ordenes}>
        <h3>Órdenes recientes</h3>
        {usuario.ordenes && usuario.ordenes.length > 0 ? (
          <ul>
            {usuario.ordenes.map((orden) => (
              <li key={orden.id}>
                <p><strong>Orden ID:</strong> {orden.id}</p>
                <p><strong>Fecha:</strong> {new Date(orden.createdAt).toLocaleDateString('es-PE')}</p>
                <p><strong>Total:</strong> S/ {orden.total}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay órdenes registradas.</p>
        )}
      </div>
    </div>
  );
};

export default UsuariosDetalleCard;
