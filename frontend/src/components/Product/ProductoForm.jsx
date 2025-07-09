import React from 'react';
import LabeledInput from '../Form/LabeledInput';
import CategoriaSelector from '../Form/CategoriaSelector';
import styles from '../../styles/AgregarProducto.module.css';

export const ProductoForm = ({ 
    producto, 
    handleChange, 
    handleStockChange, 
    handleCrearProducto,
    categorias,
    handleAgregarCategoria,
    isSubmitting = false,
    error = null
}) => {
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
                        required
                    />

                    <LabeledInput
                        label="Presentación"
                        placeholder="Presentación"
                        name="presentacion"
                        value={producto.presentacion}
                        onChange={handleChange}
                        required
                    />

                    <LabeledInput
                        label="Precio"
                        placeholder="0.00"
                        name="precio"
                        type="number"
                        step="0.01"
                        min="0"
                        value={producto.precio || ''}
                        onChange={handleChange}
                        required
                    />

                    <CategoriaSelector
                        value={producto.id_categoria}
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
                        required
                    />
                </div>

                <div className={styles.rightSection}>
                    <LabeledInput
                        label="URL de la imagen"
                        placeholder="https://ejemplo.com/imagen.jpg"
                        name="imagen"
                        type="url"
                        value={producto.imagen || ''}
                        onChange={handleChange}
                    />

                    <label>Stock</label>
                    <div className={styles.stockGroup}>
                        <input
                            type="number"
                            min="1"
                            value={producto.stock}
                            onChange={handleStockChange}
                            className={styles.stockInput}
                            required
                        />
                        <button 
                            onClick={handleCrearProducto} 
                            className={styles.crearBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creando...' : 'Crear producto'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoForm;
