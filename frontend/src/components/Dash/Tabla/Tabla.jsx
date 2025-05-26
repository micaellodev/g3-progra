import React from 'react';
import { Link } from 'react-router-dom';
import TablaBasica from './TablaBasica';
import styles from './Tabla.module.css';

const Tabla = ({ 
  title, 
  columns, 
  data, 
  renderRow, 
  actions // [{ label, to, variant? }]
}) => (
  <section className={styles.section}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.actions}>
      {actions?.map(({ label, to, variant }, i) => (
        <Link 
          key={i} 
          to={to} 
          className={`${styles.button} ${variant === 'primary' ? styles.primary : ''}`}
        >
          {label}
        </Link>
      ))}
    </div>
    <TablaBasica 
      columnas={columns} 
      datos={data} 
      renderFila={renderRow} 
    />
  </section>
)

export default Tabla
