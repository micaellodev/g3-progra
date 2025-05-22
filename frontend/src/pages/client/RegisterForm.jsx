// RegisterForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/LoginText/TextInput';
import styles from '../../styles/Inicio/TextInput.module.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', formData);
    // Lógica de envío aquí
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleRegister} className={styles.registerForm}>
        <h2>Registrarse</h2>

        <TextInput
          placeholder="Usuario"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <TextInput
          placeholder="Correo"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <TextInput
          placeholder="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className={styles.nameRow}>
          <TextInput
            placeholder="Nombre"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <TextInput
            placeholder="Apellido"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <TextInput
          placeholder="País"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />

        <button type="submit" className={styles.button}>Registrarse</button>

        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
