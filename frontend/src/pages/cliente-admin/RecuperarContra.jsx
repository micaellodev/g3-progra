// RecuperarContra.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/RecuperarContra.module.css';
import Footer from '../../components/Footer/Footer';

function RecuperarContra() {
  const [email, setEmail] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('emailRecuperacion');
  }, []);

  const handleVerificar = (e) => {
    e.preventDefault();

    let savedUser = null;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    savedUser = users.find(user => user.email === email);
    
    if (!savedUser) {
      const registeredUserString = localStorage.getItem('registeredUser');
      if (registeredUserString) {
        try {
          const registeredUser = JSON.parse(registeredUserString);
          if (registeredUser.email === email) {
            savedUser = registeredUser;
          }
        } catch (error) {
          console.error("Error al parsear registeredUser:", error);
        }
      }
    }

    if (!savedUser) {
      alert('❌ El correo no está registrado.');
      return;
    }

    const respuestaCorrecta = savedUser.clinica?.trim().toLowerCase();
    const respuestaIngresada = respuesta.trim().toLowerCase();

    if (respuestaIngresada === respuestaCorrecta) {
      localStorage.setItem('emailRecuperacion', email);
      alert('✅ Verificación correcta');
      navigate('/cambiocontra');
    } else {
      alert('❌ Respuesta incorrecta');
    }
  };

  return (
    <div className={styles.recuperarContainer}>
      <div className={styles.recuperarContent}>
        <form onSubmit={handleVerificar} className={styles.recuperarForm}>
          <h2>Recuperar Contraseña</h2>

          <TextInput
            type="email"
            placeholder="Correo registrado"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextInput
            placeholder="¿En qué clínica naciste?"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>Verificar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RecuperarContra;