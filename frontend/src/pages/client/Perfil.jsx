import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import PerfilInfo from '../../components/Perfil/PerfilInfo';
import PerfilButtons from '../../components/Perfil/PerfilButtons';
import styles from '../../styles/Perfil.module.css';

function Perfil() {
  const { currentUser } = useLogin();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className={styles.perfilContainer}>
        <h2>No has iniciado sesión</h2>
        <p>Por favor, <Link to="/login">inicia sesión</Link> para ver tu perfil.</p>
      </div>
    );
  }

  return (
    <div className={styles.perfilContainer}>
      <h2>Mi Perfil</h2>
      <PerfilInfo usuario={currentUser} />
      <PerfilButtons navigate={navigate} />
    </div>
  );
}

export default Perfil;
