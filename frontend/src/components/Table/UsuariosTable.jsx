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
      <table className={styles.productosTable}>
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
              <td>{usuario.nombre}</td>
              <td>{usuario.fechaRegistro}</td>
              <td>{usuario.estado}</td>
              <td>
                <button
                  className={styles.editBtn}
                  onClick={() => navigate(`/admin/usuarios/${usuario.id}`)}
                >
                  🔍
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDesactivar(usuario.id)}
                >
                  🚫
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
