import React, { useState } from 'react';
import GuardarBoton from './GuardarBoton';
import styles from '../../styles/Perfil.module.css';

function PerfilForm({ usuario, onGuardar, onCancelar }) {
  const [formData, setFormData] = useState({
    nombre: usuario.nombre || '',
    apellido: usuario.apellido || '',
    correo: usuario.correo || '',
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Nombre:</label>
      <input name="nombre" value={formData.nombre} onChange={handleChange} />

      <label>Apellido:</label>
      <input name="apellido" value={formData.apellido} onChange={handleChange} />

      <label>Correo:</label>
      <input name="correo" value={formData.correo} onChange={handleChange} />

      <label>País:</label>
      <input name="pais" value={formData.pais} onChange={handleChange} />

      <GuardarBoton />
      <button type="button" onClick={onCancelar} className={styles.cancelar}>Cancelar</button>
    </form>
  );
}