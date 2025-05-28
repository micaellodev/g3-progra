import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import styles from '../../styles/TextInput.module.css';
import Footer from '../../components/Footer/Footer';
import RegisterInput from '../../components/Register/RegisterInput';
import RegisterNameRow from '../../components/Register/RegisterNameRow';
import RegisterLinks from '../../components/Register/RegisterLinks';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    country: '',
    securityQuestion: '',
  });

  const navigate = useNavigate();
  const { register } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(formData); // Guarda en localStorage y opcionalmente en contexto
    alert('¡Registro exitoso!');
    navigate('/login');
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleRegister} className={styles.registerForm}>
        <h2>Registrarse</h2>
        <RegisterInput placeholder="Usuario" name="username" value={formData.username} onChange={handleChange} />
        <RegisterInput placeholder="Correo" name="email" type="email" value={formData.email} onChange={handleChange} />
        <RegisterInput placeholder="Contraseña" name="password" type="password" value={formData.password} onChange={handleChange} />
        <RegisterNameRow firstname={formData.firstname} lastname={formData.lastname} onChange={handleChange} />
        <RegisterInput placeholder="País" name="country" value={formData.country} onChange={handleChange} />
        <RegisterInput placeholder="¿En qué clínica naciste?" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} />
        <button type="submit" className={styles.button}>Registrarse</button>
        <RegisterLinks />
      </form>
      <Footer />
    </div>
  );
}

export default RegisterForm;
