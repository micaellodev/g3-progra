import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ModUsuario() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    country: '',
  });

  const navigate = useNavigate();
  const email = localStorage.getItem('email'); // 👈 Asegúrate de guardar el email en login

  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/usuario/${email}`)
      .then(res => {
        setFormData(res.data);
        setOriginalData(res.data); // Copia para restaurar si cancelas
      })
      .catch(err => console.error('Error al cargar usuario', err));
  }, [email]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGuardar = () => {
    axios.put(`http://localhost:3000/usuario/${email}`, formData)
      .then(() => {
        alert('Perfil actualizado');
        navigate('/perfil');
      })
      .catch(err => alert('Error actualizando perfil'));
  };

  const handleCancelar = () => {
    setFormData(originalData); // Restaurar datos originales
  };

  return (
    <div>
      <button onClick={() => navigate('/perfil')}>Regresar a tu perfil</button>
      <h2>Modificar Perfil</h2>

      <label>Nombre de usuario</label>
      <input name="username" value={formData.username} onChange={handleChange} />

      <label>Nombre</label>
      <input name="firstname" value={formData.firstname} onChange={handleChange} />

      <label>Apellido</label>
      <input name="lastname" value={formData.lastname} onChange={handleChange} />

      <label>País</label>
      <input name="country" value={formData.country} onChange={handleChange} />

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleGuardar}>Guardar</button>
        <button onClick={handleCancelar}>Cancelar</button>
      </div>
    </div>
  );
}

export default ModUsuario;
