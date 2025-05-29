import React from 'react';
import EditarBoton from './EditarBoton';
import styles from '../../styles/Perfil.module.css';

function PerfilView({ usuario, onEditar }) {
  return (
    <>
      <p><strong>Nombre:</strong> {usuario.nombre || 'No especificado'}</p>
      <p><strong>Apellido:</strong> {usuario.apellido || 'No especificado'}</p>
      <p><strong>Correo:</strong> {usuario.email}</p>
      <p><strong>País:</strong> {usuario.pais || 'No especificado'}</p>
      <EditarBoton onClick={onEditar} />
    </>
  );
}

export default PerfilView;