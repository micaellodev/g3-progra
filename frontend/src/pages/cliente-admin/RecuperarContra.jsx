// RecuperarContra.jsx
import { useState, useEffect } from 'react'; // Importa useEffect
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';
import styles from '../../styles/TextInput.module.css'; // Asegúrate de importar tus estilos si los usas

function RecuperarContra() {
  const [email, setEmail] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const navigate = useNavigate();

  // CAMBIO PRINCIPAL AQUÍ: Limpia emailRecuperacion al montar el componente
  useEffect(() => {
    localStorage.removeItem('emailRecuperacion'); // Limpia el email de recuperación para empezar de nuevo
  }, []); // Se ejecuta solo una vez al montar

  const handleVerificar = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!savedUser) {
      alert('❌ No hay usuarios registrados.');
      return;
    }

    if (email !== savedUser.email) {
      alert('❌ El correo no está registrado.');
      return;
    }

    const respuestaCorrecta = savedUser.securityQuestion?.trim().toLowerCase();
    const respuestaIngresada = respuesta.trim().toLowerCase();

    if (respuestaIngresada === respuestaCorrecta) {
      localStorage.setItem('emailRecuperacion', email); // Guarda el email solo si la verificación es exitosa
      alert('✅ Verificación correcta');
      navigate('/cambiocontra');
    } else {
      alert('❌ Respuesta incorrecta');
    }
  };

  return (
    <form onSubmit={handleVerificar} className={styles.form}> {/* Usar tus estilos */}
      <h2>Recuperar Contraseña</h2>

      <TextInput
        type="email"
        placeholder="Correo registrado"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        placeholder="¿En qué clínica naciste?"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />

      <button type="submit" className={styles.button}>Verificar</button> {/* Usar tus estilos */}
    </form>
  );
}

export default RecuperarContra;