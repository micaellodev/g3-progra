import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/Text/TextInput';

function RecuperarContra() {
  const [email, setEmail] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const navigate = useNavigate();

  const handleVerificar = (e) => {
    e.preventDefault();

    // Simulamos que la respuesta correcta es "Hospital Central"
    if (respuesta.trim().toLowerCase() === 'hospital central') {
      localStorage.setItem('emailRecuperacion', email);
      alert('✅ Verificación correcta');
      navigate('/cambio-contra');
    } else {
      alert('❌ Respuesta incorrecta');
    }
  };

  return (
    <form onSubmit={handleVerificar}>
      <h2>Recuperar Contraseña</h2>

      <TextInput
        type="email"
        placeholder="Correo registrado"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        placeholder="¿En qué hospital naciste?"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />

      <button type="submit">Verificar</button>
    </form>
  );
}

export default RecuperarContra;
