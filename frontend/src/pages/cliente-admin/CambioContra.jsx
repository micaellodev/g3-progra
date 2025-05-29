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
      // Limpia por si acaso y redirige
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

    if (newPassword.length < 3) { // Añade alguna validación de longitud o complejidad
      alert('❌ La contraseña debe tener al menos 3 caracteres.');
      return;
    }

    const emailRecuperacion = localStorage.getItem('emailRecuperacion');
    // Doble verificación: si por alguna razón no está aquí, redirigimos
    if (!emailRecuperacion) {
      alert('Error: No se encontró el correo de recuperación. Vuelve a iniciar el proceso.');
      navigate('/recuperarcontra');
      return;
    }

    const savedUserString = localStorage.getItem('registeredUser');
    let savedUser = null;
    if (savedUserString) {
      try {
        savedUser = JSON.parse(savedUserString);
      } catch (error) {
        console.error("Error al parsear el usuario de localStorage:", error);
        alert("Error al procesar los datos del usuario.");
        return;
      }
    }

    if (savedUser && savedUser.email === emailRecuperacion) {
      const updatedUser = {
        ...savedUser,
        password: newPassword,
      };

      localStorage.setItem('registeredUser', JSON.stringify(updatedUser));

      // CAMBIO ADICIONAL: Limpiar el email de recuperación SIEMPRE que se haya usado
      localStorage.removeItem('emailRecuperacion'); 

      alert('✅ Contraseña cambiada exitosamente. ¡Ahora puedes iniciar sesión con tu nueva contraseña!');
      navigate('/login');
    } else {
      alert('Error: No se pudo encontrar el usuario para cambiar la contraseña o el email no coincide.');
      // Si hay un error, limpiar el email de recuperación para forzar el flujo correcto
      localStorage.removeItem('emailRecuperacion'); 
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
      />

      <TextInput
        type="password"
        placeholder="Confirmar Nueva Contraseña"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />

      <div className={styles.actions}>
        <button type="submit" className={styles.button}>Cambiar</button>
        <Link to="/login" className={styles.link}>Cancelar</Link>
      </div>
    </form>
  );
}

export default CambioContra;

