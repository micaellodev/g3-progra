//CambioContra.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/TextInput.module.css';

function CambioContra() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const emailRecuperacion = localStorage.getItem('emailRecuperacion');
    if (!emailRecuperacion) {
      alert('Debes pasar por el proceso de verificación de seguridad primero.');
      localStorage.removeItem('emailRecuperacion');
      navigate('/recuperarcontra');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    if (newPassword.length < 3) {
      alert('❌ La contraseña debe tener al menos 3 caracteres.');
      return;
    }

    const emailRecuperacion = localStorage.getItem('emailRecuperacion');
    if (!emailRecuperacion) {
      alert('Error: No se encontró el correo de recuperación. Vuelve a iniciar el proceso.');
      navigate('/recuperarcontra');
      return;
    }

    let userUpdated = false;

    // Actualizar en 'users' (array) si existe
    const usersString = localStorage.getItem('users');
    if (usersString) {
      try {
        const users = JSON.parse(usersString);
        const userIndex = users.findIndex(user => user.email === emailRecuperacion);
        
        if (userIndex !== -1) {
          users[userIndex].password = newPassword;
          localStorage.setItem('users', JSON.stringify(users));
          userUpdated = true;
        }
      } catch (error) {
        console.error("Error al parsear users:", error);
      }
    }

    // También actualizar en 'registeredUser' (objeto único) si existe
    const registeredUserString = localStorage.getItem('registeredUser');
    if (registeredUserString) {
      try {
        const registeredUser = JSON.parse(registeredUserString);
        if (registeredUser.email === emailRecuperacion) {
          const updatedUser = {
            ...registeredUser,
            password: newPassword,
          };
          localStorage.setItem('registeredUser', JSON.stringify(updatedUser));
          userUpdated = true;
        }
      } catch (error) {
        console.error("Error al parsear registeredUser:", error);
      }
    }

    // Limpiar el email de recuperación
    localStorage.removeItem('emailRecuperacion');

    if (userUpdated) {
      alert('✅ Contraseña cambiada exitosamente. ¡Ahora puedes iniciar sesión con tu nueva contraseña!');
      navigate('/login');
    } else {
      alert('Error: No se pudo encontrar el usuario para cambiar la contraseña.');
      navigate('/recuperarcontra');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Cambiar Contraseña</h2>

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
    </form>
  );
}

export default CambioContra;