// UsuariosTabla.jsx
import React, { useState, useEffect } from 'react';
import Tabla from '../Tabla/Tabla';
import { usuarios as usuariosConst } from '../../../constantes/Consts';
import styles from './UsuariosTabla.module.css';

const UsuariosTabla = ({ onVerDetalle }) => {
  const [usuariosEstado, setUsuariosEstado] = useState([]);

  useEffect(() => {
    setUsuariosEstado(usuariosConst);
  }, []);

  const handleToggleEstado = (id) => {
    setUsuariosEstado(prev =>
      prev.map(u =>
        u.id === id ? { ...u, estado: u.estado === 'Activo' ? 'Inactivo' : 'Activo' } : u
      )
    );
    const usuario = usuariosEstado.find(u => u.id === id);
    alert(`Usuario con ID ${id} ${usuario?.estado === 'Activo' ? 'desactivado' : 'activado'}`);
  };

  return (
    <div className={styles.tableWrapper}>
      <Tabla
        title="Usuarios registrados"
        tableClassName={styles.usuarioTable}
        columns={['Nombre', 'Estado', 'Acciones']}
        data={usuariosEstado}
        renderRow={u => (
          <tr key={u.id}>
            <td>{u.nombre}</td>
            <td className={u.estado === 'Activo' ? styles.activo : styles.inactivo}>
              {u.estado}
            </td>
            <td>
              <button
                className={styles.verDetalle}
                onClick={() => onVerDetalle(u.id)}
              >
                Ver detalle
              </button>
              <button
                className={u.estado === 'Activo' ? styles.deshabilitar : styles.activar}
                onClick={() => handleToggleEstado(u.id)}
              >
                {u.estado === 'Activo' ? 'Deshabilitar' : 'Activar'}
              </button>
            </td>
          </tr>
        )}
        actions={[
          { label: 'Ver todos los usuarios', to: '/listausuarios', variant: 'primary' }
        ]}
      />
    </div>
  );
};

export default UsuariosTabla;
