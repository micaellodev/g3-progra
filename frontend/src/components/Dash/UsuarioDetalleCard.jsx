import React from 'react';
import styles from './UsuarioDetalleCard.module.css';
import OrdenesTabla from './OrdenesTabla';

const UsuarioDetalleCard = ({ usuario, titulo }) => {
  return (
      <section>
        {titulo && <h2>{titulo}</h2>}
      <div className={styles.card}>
        <div className={styles.header}>
          <img src={usuario.foto} alt={usuario.nombre} className={styles.foto} />
          <div>
            <h3>{usuario.nombre}</h3>
            <p><strong>Correo:</strong> <a href={`mailto:${usuario.correo}`}>{usuario.correo}</a></p>
            <p><strong>Fecha de registro:</strong> {usuario.fechaRegistro}</p>
            <p><strong>Estado:</strong> {usuario.estado}</p>
          </div>
        </div>

        <div className={styles.ordenes}>
          <h4>Órdenes</h4>
          <OrdenesTabla ordenes={usuario.ordenes} />
        </div>
      </div>
    </section>
  );
};

export default UsuarioDetalleCard;
