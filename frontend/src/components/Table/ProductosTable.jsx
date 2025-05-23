
import React from 'react';
import { juegos } from '../../constantes/Consts'; // ajusta la ruta si la tienes en otro sitio
import styles from '../../styles/ListaProducto.module.css';

const ProductosTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.productosTable}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Id</th>
            <th>Nombre</th>
            <th>Presentación</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {juegos.map((j) => (
            <tr key={j.id}>
              <td>
                <img
                  src={j.imagen}
                  alt={j.nombre}
                  className={styles.imagenProducto}
                />
              </td>
              <td>#{j.id.toString().padStart(4, '0')}</td>
              <td>{j.nombre}</td>
              <td>{j.presentacion}</td>
              <td className={styles.descripcionCell}>{j.descripcion}</td>
              <td>{j.categoria}</td>
              <td>{j.stock}</td>
              <td>
                <button className={styles.editBtn}>✏️</button>
                <button className={styles.deleteBtn}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosTable;
