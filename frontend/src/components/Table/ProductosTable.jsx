import React from 'react';
import { useProductContext } from '../../hooks/ProductContext';
import { useProductosHandlers } from '../../hooks/useProductosHandlers';
import styles from './ListaProducto.module.css';

const ProductosTable = ({ busqueda }) => {
  const { products } = useProductContext();
  const {
    editIndex,
    editedProduct,
    startEdit,
    cancelEdit,
    saveEdit,
    handleDelete,
    handleChange,
  } = useProductosHandlers();

  const productosFiltrados = products.filter(p => {
    if (!p || !p.nombre) return false;
    return p.nombre.toLowerCase().startsWith(busqueda.toLowerCase());
  });

  if (!productosFiltrados.length) {
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
          {productosFiltrados.map((p, idx) => {
            const isEditing = editIndex === idx;

            return (
              <tr key={idx}>
                <td>
                  {p.imagen ? (
                    <img
                      src={typeof p.imagen === 'string' ? p.imagen : URL.createObjectURL(p.imagen)}
                      alt={p.nombre}
                      className={styles.imagenProducto}
                    />
                  ) : '—'}
                </td>
                <td>#{(idx + 1).toString().padStart(4, '0')}</td>
                <td>
                  {isEditing ? (
                    <input name="nombre" value={editedProduct.nombre} onChange={handleChange} />
                  ) : p.nombre}
                </td>
                <td>
                  {isEditing ? (
                    <input name="presentacion" value={editedProduct.presentacion} onChange={handleChange} />
                  ) : p.presentacion}
                </td>
                <td className={styles.descripcionCell}>
                  {isEditing ? (
                    <input name="descripcion" value={editedProduct.descripcion} onChange={handleChange} />
                  ) : p.descripcion}
                </td>
                <td>
                  {isEditing ? (
                    <input name="categoria" value={editedProduct.categoria} onChange={handleChange} />
                  ) : p.categoria}
                </td>
                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        name="stock"
                        value={editedProduct.stock}
                        onChange={handleChange}
                        onKeyDown={(e) => {
                          const allowedKeys = [
                            'ArrowUp',
                            'ArrowDown',
                            'Tab',
                            'Backspace',
                            'Delete',
                            'Enter',
                            'Home',
                            'End',
                          ];
                          if (!allowedKeys.includes(e.key)) {
                            e.preventDefault();
                          }
                        }}
                      />
                    ) : (
                      p.stock
                    )}
                  </td>
                <td>
                  {isEditing ? (
                    <>
                      <button className={styles.editBtn} onClick={saveEdit}>💾</button>
                      <button className={styles.deleteBtn} onClick={cancelEdit}>❌</button>
                    </>
                  ) : (
                    <>
                      <button className={styles.editBtn} onClick={() => startEdit(idx, p)}>✏️</button>
                      <button className={styles.deleteBtn} onClick={() => handleDelete(idx)}>🗑️</button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosTable;
