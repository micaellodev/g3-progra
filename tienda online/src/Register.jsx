import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    country: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', form);
      alert(res.data.message);
      navigate('/login'); // Redirige al login después de registrar
    } catch (err) {
      alert(err.response?.data?.error || 'Error en el registro');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      <input name="firstname" placeholder="Nombre" onChange={handleChange} />
      <input name="lastname" placeholder="Apellido" onChange={handleChange} />
      <input name="email" placeholder="Correo" onChange={handleChange} />
      <input name="username" placeholder="Usuario" onChange={handleChange} />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
      <input name="country" placeholder="País" onChange={handleChange} />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
