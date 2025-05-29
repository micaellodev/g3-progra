import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Perfil.module.css';
function PerfilHeader({ currentUser }) {
  if (!currentUser) {
    return (
      <>
        <h2>No has iniciado sesión</h2>
        <p>Por favor, <Link to="/login">inicia sesión</Link> para ver tu perfil.</p>
      </>
    );
  }

  return <h2>Mi Perfil</h2>;
}

export default PerfilHeader;
