import React, { useState } from 'react';
import GuardarBoton from './GuardarBoton';
import styles from '../../styles/Perfil.module.css';

function PerfilForm({ usuario, onGuardar }) {
  const [formData, setFormData] = useState({
    nombre: usuario.nombre || '',
    apellido: usuario.apellido || '',
    email: usuario.email || '',
    pais: usuario.pais || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formGroup}>
      <label>Nombre:</label>
      <input
        className={styles.input}
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />

      <label>Apellido:</label>
      <input
        className={styles.input}
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        placeholder="Apellido"
      />

      <label>Correo:</label>
      <input
        className={styles.input}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo"
        disabled
      />

      <label>País:</label>
      <input
        className={styles.input}
        type="text"
        name="pais"
        value={formData.pais}
        onChange={handleChange}
        placeholder="País"
      />

      <GuardarBoton />
    </form>
  );
}

export default PerfilForm;