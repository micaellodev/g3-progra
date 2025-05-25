import React from 'react';
import styles from './OrdenesListado.module.css';
import TablaBasica from './TablaBasica';
import { ordenes } from '../../constantes/consts';

const OrdenesListado = ({ titulo }) => {
  return (
    <section className={styles.listado}>
      {titulo && <h2 className={styles.titulo}>{titulo}</h2>}
      <TablaBasica
        columnas={['#ID', 'Usuario', 'Fecha de órden', 'Total', 'Estado']}
        datos={ordenes}
        renderFila={(o) => (
          <tr key={o.id}>
            <td><a href="#">{o.id}</a></td>
            <td>{o.usuario}</td>
            <td>{o.fecha}</td>
            <td>S/{o.total.toFixed(2)}</td>
            <td className={o.estado === 'Entregado' ? styles.entregado : styles.pendiente}>
              {o.estado}
            </td>
          </tr>
        )}
      />
    </section>
  );
};

export default OrdenesListado;
