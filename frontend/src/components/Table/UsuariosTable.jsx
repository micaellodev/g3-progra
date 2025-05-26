import React from 'react';
import styles from './ListaUsuario.module.css';
import { useNavigate } from 'react-router-dom';

const UsuariosTable = ({ usuarios = [] }) => {
  const navigate = useNavigate();

  const handleDesactivar = (id) => {
    alert(`Usuario con ID ${id} desactivado`);
    // Aquí podrías cambiar el estado o llamar una API
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.usuarioTable}>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Fecha Registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className={styles.nombreCelda}>
                <div className={styles.nombreContenido}>
                  <img src={usuario.foto} alt="Foto" className={styles.usuarioFoto} />
                  {usuario.nombre}
                </div>
              </td>
              <td>{usuario.fechaRegistro}</td>
              <td className={usuario.estado === 'Activo' ? styles.estadoActivo : styles.estadoInactivo}>{usuario.estado}</td>
              <td>
                <button
                  className={styles.verBtn}
                  onClick={() => navigate(`/admin/usuarios/${usuario.id}`)}
                >
                  Ver Detalle
                </button>
                <button
                  className={styles.desactivarBtn}
                  onClick={() => handleDesactivar(usuario.id)}
                >
                  Desactivar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;
