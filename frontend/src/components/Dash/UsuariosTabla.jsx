import React from 'react';
import styles from './tableDash.module.css';
import { usuarios } from '../../constantes/consts';

const BotonEstado = ({ estado, onClick }) => (
  <button
    className={estado === 'Activo' ? styles.deshabilitar : styles.activar}
    onClick={onClick}
  >
    {estado === 'Activo' ? 'Deshabilitar' : 'Activar'}
  </button>
);

const UsuariosTabla = ({ titulo }) => {
  return (
      <section>
        {titulo && <h2>{titulo}</h2>}
      <div className={styles.tablaUsuarios}>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.nombre}</td>
                <td className={u.estado === 'Activo' ? styles.activo : styles.inactivo}>{u.estado}</td>
                <td>
                  <BotonEstado estado={u.estado} onClick={() => { /* Lógica de cambio */ }} />
                  <button className={styles.verDetalle}>Ver detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsuariosTabla;
