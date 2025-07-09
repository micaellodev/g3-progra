// src/pages/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import { loginUsuario } from '../../services/usarioServices'; // Importar el servicio
import styles from '../../styles/LoginForm.module.css';

import LoginInputs from '../../components/Login/LoginInputs';
import LoginActions from '../../components/Login/LoginActions';
import LoginLinks from '../../components/Login/LoginLinks';
import Footer from '../../components/Footer/Footer';

function LoginForm() {
  const { login } = useLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    if (!email.trim()) {
      setError('El correo es obligatorio');
      return false;
    }
    if (!password.trim()) {
      setError('La contraseña es obligatoria');
      return false;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('El formato del correo no es válido');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError('');

    try {
      // Llamar al servicio de login del backend
      const resultado = await loginUsuario({
        correo: email,
        contrasena: password
      });

      console.log('Login exitoso:', resultado);

      // Guardar usuario en el contexto
      login(resultado.usuario);

      // Opcional: Guardar en localStorage para persistencia de sesión
      localStorage.setItem('usuario', JSON.stringify(resultado.usuario));
      localStorage.setItem('isLoggedIn', 'true');

      // Mostrar mensaje de éxito
      alert('✅ Login exitoso');
      
      // Redirigir a la página principal o dashboard
      navigate('/');
      
    } catch (error) {
      console.error('Error en login:', error);
      
      // Manejar diferentes tipos de errores del backend
      if (error.message.includes('Usuario no encontrado')) {
        setError('❌ No existe una cuenta con este correo');
      } else if (error.message.includes('Contraseña incorrecta')) {
        setError('❌ Contraseña incorrecta');
      } else if (error.message.includes('Correo y contraseña son obligatorios')) {
        setError('❌ Completa todos los campos');
      } else {
        setError('❌ Error de conexión. Intenta nuevamente más tarde.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Limpiar error al escribir
  const handleEmailChange = (value) => {
    setEmail(value);
    if (error) setError('');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (error) setError('');
  };

  return (
    <div className={styles.pageContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Iniciar Sesión</h2>

        <LoginInputs
          email={email}
          setEmail={handleEmailChange}
          password={password}
          setPassword={handlePasswordChange}
          isLoading={isLoading}
        />

        {error && <div className={styles.error}>{error}</div>}

        <LoginLinks />
        <LoginActions isLoading={isLoading} />
      </form>

      <Footer />
    </div>
  );
}

export default LoginForm;