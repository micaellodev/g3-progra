import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuarioP } from '../../constantes/consts';
import PerfilInfo from '../../components/Perfil/PerfilInfo';
import PerfilButtons from '../../components/Perfil/PerfilButtons';
import styles from '../../styles/Perfil.module.css';

function Perfil() {
  const navigate = useNavigate();

  return (
    <div className={styles.perfilContainer}>
      <h2>Mi Perfil</h2>
      <PerfilInfo usuario={usuarioP} />
      <PerfilButtons navigate={navigate} />
    </div>
  );
}

export default Perfil;
