// src/components/Dash/OrdersSection.jsx
import React from 'react';
import Tabla from '../Tabla/Tabla';
import { ordenes } from '../../../constantes/consts';
import styles from './OrdenesTabla.module.css';

const OrdenesTabla = () => (
  <Tabla
    title="Listado de órdenes"
    columns={['#ID', 'Usuario', 'Fecha de orden', 'Total', 'Estado']}
    data={ordenes}
    renderRow={o => (
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
    actions={[
      { label: 'Ver productos', to: '/listaproducto' },
      { label: 'Ver todas las órdenes', to: '/listaordenes', variant: 'primary' }
    ]}
  />
)

export default OrdenesTabla
