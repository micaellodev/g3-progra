import React from 'react';
import LabeledInput from '../Form/LabeledInput';
import CategoriaSelector from '../Form/CategoriaSelector';
import styles from '../../styles/AgregarProducto.module.css';

export const ProductoForm = ({ producto, handleChange, handleStockChange, handleImagenChange, handleCrearProducto,categorias,handleAgregarCategoria}) => {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <div className={styles.leftSection}>
                    <h1>Agregar un producto</h1>
                    <LabeledInput
                        label="Nombre de producto"
                        placeholder="Nombre del producto"
                        name="nombre"
                        value={producto.nombre}
                        onChange={handleChange}
                    />

                    <LabeledInput
                        label="Presentación"
                        placeholder="Presentación"
                        name="presentacion"
                        value={producto.presentacion}
                        onChange={handleChange}
                    />

                    <CategoriaSelector
                        value={producto.categoria}
                        onChange={handleChange}
                        categorias={categorias}
                        onAgregarCategoria={handleAgregarCategoria}
                    />

                    <label>Descripción</label>
                    <textarea
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        placeholder="Escribe una descripción del producto..."
                        className={styles.textarea}
                    />
                </div>

                <div className={styles.rightSection}>
                    <label>Imagen</label>
                    <div className={styles.imageUploadBox}>
                        <input type="file" onChange={handleImagenChange} />
                    </div>

                    <label>Stock</label>
                    <div className={styles.stockGroup}>
                        <input
                            type="number"
                            min="0"
                            value={producto.stock}
                            onChange={handleStockChange}
                            className={styles.stockInput}
                        />
                        <button onClick={handleCrearProducto} className={styles.crearBtn}>
                            Crear producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoForm;
