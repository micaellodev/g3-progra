// src/components/Modal/ModalNuevaCategoria.jsx
import React, { useState } from 'react';
import styles from '../../styles/ModalNuevaCategoria.module.css';
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

  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Nueva categoría</h2>
        <LabeledInput
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej. Bebidas"
          name="nombreCategoria"
        />

        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe esta categoría..."
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
