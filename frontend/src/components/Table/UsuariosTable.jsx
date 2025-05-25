import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListaUsuario.module.css';

const UsuariosTable = ({ usuarios = [] }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.productosTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>#{usuario.id.toString().padStart(4, '0')}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
              <td>
                <button
                  className={styles.editBtn}
                  onClick={() => navigate(`/admin/usuarios/${usuario.id}`)}
                >
                  🔍 Ver
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
