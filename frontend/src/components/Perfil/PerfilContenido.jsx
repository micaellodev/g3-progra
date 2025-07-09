import React from 'react';
import PerfilForm from './PerfilForm';
import PerfilView from './PerfilView';
import styles from '../../styles/Perfil.module.css';
function PerfilContenido({ 
  currentUser, 
  editando, 
  setEditando, 
  onGuardar, 
  onEditar, 
  onCambiarContrasena 
}) {
  return (
    <>
      {editando ? (
        <PerfilForm usuario={currentUser} onGuardar={onGuardar} onCancelar={() => setEditando(false)} />
      ) : (
        <PerfilView usuario={currentUser} onEditar={onEditar} onCambiarContrasena={onCambiarContrasena} />
      )}
    </>
  );
}

export default PerfilContenido;