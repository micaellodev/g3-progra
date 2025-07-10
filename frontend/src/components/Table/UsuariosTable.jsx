import React, { useState, useEffect } from 'react';
import styles from './ListaUsuario.module.css';
import { useNavigate } from 'react-router-dom';

const UsuariosTable = ({ usuarios = [] }) => {
  const navigate = useNavigate();
  const [usuariosEstado, setUsuariosEstado] = useState([]);

  useEffect(() => {
    const copiaUsuarios = usuarios.map((u) => ({ ...u }));
    setUsuariosEstado(copiaUsuarios);
  }, [usuarios]);

  const handleDesactivar = (id) => {
    setUsuariosEstado(prev =>
      prev.map((u) =>
        u.id === id ? { ...u, estado: 'Inactivo' } : u
      )
    );
  };

  const handleActivar = (id) => {
    setUsuariosEstado(prev =>
      prev.map((u) =>
        u.id === id ? { ...u, estado: 'Activo' } : u
      )
    );
  };

  const handleVerDetalle = (id) => {
    if (id) {
      navigate(`/admin/usuarios/${id}`);
    } else {
      console.error('ID de usuario inválido');
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.usuarioTable}>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosEstado.map((usuario) => (
            <tr key={usuario.id}>
              <td className={styles.nombreCelda}>
                <div className={styles.nombreContenido}>
                  <img
                    src={usuario.foto}
                    alt="Foto"
                    className={styles.usuarioFoto}
                  />
                  {usuario.nombre}
                </div>
              </td>
              <td
                className={
                  usuario.estado === 'Activo'
                    ? styles.estadoActivo
                    : styles.estadoInactivo
                }
              >
                {usuario.estado}
              </td>
              <td>
                <button
                  className={styles.verBtn}
                  onClick={() => handleVerDetalle(usuario.id)}
                >
                  Ver Detalle
                </button>
                {usuario.estado === 'Activo' ? (
                  <button
                    className={styles.desactivarBtn}
                    onClick={() => handleDesactivar(usuario.id)}
                  >
                    Desactivar
                  </button>
                ) : (
                  <button
                    className={styles.activarBtn}
                    onClick={() => handleActivar(usuario.id)}
                  >
                    Activar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;
