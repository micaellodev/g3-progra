import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';

import RegisterInput from '../../components/Register/RegisterInput';
import RegisterNameRow from '../../components/Register/RegisterNameRow';
import RegisterLinks from '../../components/Register/RegisterLinks';

function RegisterForm() {
  const { register } = useLogin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    clinic: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!formData.clinic.trim()) {
      setError('Por favor, ingresa la clínica donde naciste');
      return;
    }

    register({
      nombre: formData.firstname,
      apellido: formData.lastname,
      email: formData.email,
      pais: formData.country,
      clinica: formData.clinic,
      password: formData.password
    });

    alert('Registro exitoso');
    navigate('/');  // Redirige al inicio
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      <RegisterNameRow firstname={formData.firstname} lastname={formData.lastname} onChange={handleChange} />
      <RegisterInput name="email" type="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
      <RegisterInput name="country" placeholder="País" value={formData.country} onChange={handleChange} />
      <RegisterInput name="clinic" placeholder="Clínica donde naciste" value={formData.clinic} onChange={handleChange} />
      <RegisterInput name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
      <RegisterInput name="password2" type="password" placeholder="Confirmar contraseña" value={formData.password2} onChange={handleChange} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Registrarse</button>
      <RegisterLinks />
    </form>
  );
}

export default RegisterForm;


