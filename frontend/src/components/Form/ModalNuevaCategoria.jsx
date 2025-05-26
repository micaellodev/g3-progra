import React, { useState } from 'react';
import styles from './ModalNuevaCategoria.module.css';
import LabeledInput from '../Form/LabeledInput';

const ModalNuevaCategoria = ({ visible, onClose, onCreate }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCrear = () => {
    const nuevaCategoria = { nombre, descripcion };
    onCreate(nuevaCategoria);
    setNombre('');
    setDescripcion('');
    onClose();
  };

  const handleOverlayClick = (e) => {
    // Si el clic fue directamente en el fondo (no dentro del modal), cerrar
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2>Nueva categoría</h2>
        <LabeledInput
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          name="nombreCategoria"
        />

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className={styles.textarea}
        />

        <button onClick={handleCrear} className={styles.crearBtn}>
          Crear categoría
        </button>
      </div>
    </div>
  );
};

export default ModalNuevaCategoria;
