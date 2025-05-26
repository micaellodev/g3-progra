import React, { useState } from 'react';
import GuardarBoton from './GuardarBoton';
import styles from '../../styles/Perfil.module.css';

function PerfilForm({ usuario, onGuardar }) {
  const [nombre, setNombre] = useState(usuario.nombre);
  const [apellido, setApellido] = useState(usuario.apellido);
  const [email, setEmail] = useState(usuario.email);
  const [pais, setPais] = useState(usuario.pais);

  const handleSubmit = () => {
    onGuardar({ nombre, apellido, email, pais });
  };

  return (
    <>
      <label>Nombre:</label>
      <input className={styles.input} type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={usuario.nombre} />

      <label>Apellido:</label>
      <input className={styles.input} type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder={usuario.apellido} />

      <label>Correo:</label>
      <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={usuario.email} />

      <label>País:</label>
      <input className={styles.input} type="text" value={pais} onChange={(e) => setPais(e.target.value)} placeholder={usuario.pais} />

      <GuardarBoton onClick={handleSubmit} />
    </>
  );
}

export default PerfilForm;
