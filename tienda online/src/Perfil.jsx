import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';
import axios from 'axios';

function Perfil() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const [usuario, setUsuario] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    country: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/usuario/${email}`)
      .then(res => {
        setUsuario(res.data);
      })
      .catch(err => {
        console.error('Error al cargar usuario:', err);
        alert('Error al obtener datos del usuario');
      });
  }, [email]);

  return (
  <div className="perfil-container">
    <h2>Mi Perfil</h2>
    <p><strong>Nombre de usuario:</strong> {usuario.username}</p>
    <p><strong>Correo:</strong> {usuario.email}</p>
    <p><strong>Nombre:</strong> {usuario.firstname}</p>
    <p><strong>Apellido:</strong> {usuario.lastname}</p>
    <p><strong>País:</strong> {usuario.country}</p>

    <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
      <button onClick={() => navigate('/modusuario')}>Modificar perfil</button>
      <button onClick={() => navigate('/inicio')}>Volver a Inicio</button>
    </div>
  </div>
);
}

export default Perfil;
