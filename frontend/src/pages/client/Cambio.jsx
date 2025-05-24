import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cambio({ handleLogin }) {
  const [actual, setActual] = useState('');
  const [nueva, setNueva] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCambio = (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    const registro = JSON.parse(localStorage.getItem('registeredUser'));

    if (!usuario || !registro) {
      setError('No hay usuario logueado.');
      return;
    }

    if (actual !== usuario.password) {
      setError('La contraseña actual es incorrecta.');
      return;
    }

    if (nueva !== confirmar) {
      setError('Las contraseñas nuevas no coinciden.');
      return;
    }

    const actualizado = { ...usuario, password: nueva };

    // ✅ Actualiza en currentUser y registeredUser
    localStorage.setItem('currentUser', JSON.stringify(actualizado));
    localStorage.setItem('registeredUser', JSON.stringify(actualizado)); // ✅ Esto asegura que el login funcione con la nueva contraseña
    handleLogin(actualizado);

    alert('Contraseña actualizada correctamente');
    navigate('/perfil');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Cambiar contraseña</h2>
      <form onSubmit={handleCambio} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          type="password"
          placeholder="Contraseña actual"
          value={actual}
          onChange={(e) => setActual(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar nueva contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default Cambio;
