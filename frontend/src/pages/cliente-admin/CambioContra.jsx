//CambioContra.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/CambioContra.module.css';
import Footer from '../../components/Footer/Footer';
import { useLogin } from '../../hooks/LoginContext';

function CambioContra() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { currentUser } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      alert('Debes iniciar sesión para cambiar la contraseña.');
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    if (newPassword.length < 3) {
      alert('❌ La contraseña debe tener al menos 3 caracteres.');
      return;
    }

    if (!currentUser) {
      alert('Error: No se encontró el usuario autenticado.');
      navigate('/login');
      return;
    }

    // Usar id_usuario o id según lo que tenga el objeto
    const userId = currentUser.id_usuario || currentUser.id;
    if (!userId) {
      alert('Error: No se encontró el ID del usuario.');
      return;
    }

    try {
      const response = await fetch(`/api/usuarios/${userId}/cambiar-contrasena`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contrasenaActual: currentPassword,
          nuevaContrasena: newPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('✅ Contraseña cambiada exitosamente. ¡Ahora puedes iniciar sesión con tu nueva contraseña!');
        navigate('/login');
      } else {
        alert(data.error || 'Error al cambiar la contraseña.');
      }
    } catch (error) {
      alert('Error de red al intentar cambiar la contraseña.');
    }
  };

  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Cambiar Contraseña</h2>

        <TextInput
          type="password"
          placeholder="Contraseña Actual"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <TextInput
          type="password"
          placeholder="Nueva Contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <TextInput
          type="password"
          placeholder="Confirmar Nueva Contraseña"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
        />

        <div className={styles.actions}>
          <button type="submit" className={styles.button}>Cambiar</button>
          <Link to="/login" className={styles.link}>Cancelar</Link>
        </div>
        <Footer />
      </form>
  );
}

export default CambioContra;