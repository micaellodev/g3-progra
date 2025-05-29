import React from 'react';
import { juegos } from '../../constantes/Consts.jsx'; // mantenemos los juegos iniciales
import { useProductContext } from '../../hooks/ProductContext.jsx';
import styles from './ListaProducto.module.css';

const ProductosTable = () => {
  const { products: nuevosProductos } = useProductContext();
  const allProducts = [...juegos, ...nuevosProductos];

  if (allProducts.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

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
          {allProducts.map((p, idx) => (
            <tr key={idx}>
              <td>
                {p.imagen
                  ? <img
                      src={typeof p.imagen === 'string'
                        ? p.imagen
                        : URL.createObjectURL(p.imagen)
                      }
                      alt={p.nombre}
                      className={styles.imagenProducto}
                    />
                  : '—'}
              </td>
              <td>#{(idx + 1).toString().padStart(4, '0')}</td>
              <td>{p.nombre}</td>
              <td>{p.presentacion}</td>
              <td className={styles.descripcionCell}>{p.descripcion}</td>
              <td>{p.categoria}</td>
              <td>{p.stock}</td>
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
