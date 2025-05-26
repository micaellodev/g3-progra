import React from 'react';
import Tabla from '../Tabla/Tabla';
import { usuarios } from '../../../constantes/consts';
import styles from './UsuariosTabla.module.css';

const UsuariosTabla = () => (
  <Tabla
    title="Usuarios registrados"
    columns={['Nombre', 'Estado', 'Acciones']}
    data={usuarios}
    renderRow={u => (
      <tr key={u.id}>
        <td>{u.nombre}</td>
        <td className={u.estado === 'Activo' ? styles.activo : styles.inactivo}>
          {u.estado}
        </td>
        <td>
          <button className={styles.verDetalle}>Ver detalle</button>
          <button className={u.estado === 'Activo' ? styles.deshabilitar : styles.activar}>
            {u.estado === 'Activo' ? 'Deshabilitar' : 'Activar'}
          </button>
        </td>
      </tr>
    )}
    actions={[
      { label: 'Ver todos los usuarios', to: '/listausuarios', variant: 'primary' }
    ]}
  />
)

export default UsuariosTabla
