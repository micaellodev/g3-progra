import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usuarioP } from '../../constantes/consts';
import PerfilInfo from '../../components/Perfil/PerfilInfo';
import PerfilButtons from '../../components/Perfil/PerfilButtons';
import styles from '../../styles/Perfil.module.css';

// El componente Perfil ahora recibe 'currentUser' como una prop
function Perfil({ currentUser }) { // <-- Recibe la prop 'currentUser'
  const navigate = useNavigate();

  // Si no hay un usuario logueado (currentUser es null), muestra un mensaje
  if (!currentUser) {
    return (
      <div className={styles.perfilContainer}>
        <h2>No has iniciado sesión</h2>
        <p>Por favor, <Link to="/login">inicia sesión</Link> para ver tu perfil.</p>
      </div>
    );
  }

  // Si hay un usuario, renderiza la información del perfil
  return (
    <div className={styles.perfilContainer}>
      <h2>Mi Perfil</h2>
      {/* Pasa el 'currentUser' que recibes como prop al componente PerfilInfo */}
      <PerfilInfo usuario={currentUser} /> {/* <-- ¡Cambio aquí! */}
      <PerfilButtons navigate={navigate} />
    </div>
  );
}

export default Perfil;