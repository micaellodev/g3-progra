import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import PerfilView from '../../components/Perfil/PerfilView';
import PerfilForm from '../../components/Perfil/PerfilForm';
import AtrasBoton from '../../components/Perfil/AtrasBoton';
import styles from '../../styles/Perfil.module.css';

function Perfil() {
  const { currentUser, updateUser } = useLogin();
  const navigate = useNavigate();
  const [editando, setEditando] = useState(false);

  const handleGuardar = (data) => {
    updateUser(data);
    setEditando(false);
    alert('Datos actualizados correctamente');
  };

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
      {editando ? (
        <PerfilForm usuario={currentUser} onGuardar={handleGuardar} />
      ) : (
        <PerfilView usuario={currentUser} onEditar={() => setEditando(true)} />
      )}
      <AtrasBoton onClick={() => navigate('/')} />
    </div>
  );
}

export default Perfil;
