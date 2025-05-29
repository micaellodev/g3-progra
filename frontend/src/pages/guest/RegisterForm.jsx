import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import RegisterFormContent from '../../components/Register/RegisterFormContent';

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

  const newUser = {
    nombre: formData.firstname,
    apellido: formData.lastname,
    email: formData.email,
    pais: formData.country,
    clinica: formData.clinic,
    password: formData.password
  };

  // Guardar en lista de usuarios
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registro exitoso');
  navigate('/');
};

  return (
    <RegisterFormContent
      formData={formData}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default RegisterForm;
