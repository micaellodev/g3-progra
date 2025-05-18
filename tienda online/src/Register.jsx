import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // Asegúrate de importar el CSS

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    country: ''
  });

  const navigate = useNavigate();

  
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  // Validación: verificar que ningún campo esté vacío
  const emptyField = Object.values(formData).some(value => value.trim() === '');
  if (emptyField) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  try {
    await axios.post('http://localhost:3000/register', formData);
    alert('Usuario registrado correctamente');
    navigate('/login');
  } catch (err) {
    alert(err.response?.data?.error || 'Error al registrar');
  }
};

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Registrarse</h2>
        <input placeholder="Usuario" name="username" value={formData.username} onChange={handleChange} />
        <input placeholder="Correo" name="email" type="email" value={formData.email} onChange={handleChange} />
        <input placeholder="Contraseña" name="password" type="password" value={formData.password} onChange={handleChange} />
        <div className="name-row">
          <input placeholder="Nombre" name="firstname" value={formData.firstname} onChange={handleChange} />
          <input placeholder="Apellido" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <input placeholder="País" name="country" value={formData.country} onChange={handleChange} />
        <button type="submit">Registrarse</button>
        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
      </form>
    </div>
  );
}

export default Register;
