import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContraseñaInput from '../../components/Modificar/ContraseñaInput'; // ajusta la ruta si es necesario

function CambioContra() {
  const [nuevaContra, setNuevaContra] = useState('');
  const [confirmarContra, setConfirmarContra] = useState('');
  const navigate = useNavigate();

  const handleCambio = (e) => {
    e.preventDefault();

    if (nuevaContra !== confirmarContra) {
      alert('⚠️ Las contraseñas no coinciden');
      return;
    }

    // Simulación de éxito
    alert('✅ Contraseña cambiada exitosamente');
    navigate('/'); // Redirige al login u otra ruta
  };

  return (
    <form onSubmit={handleCambio}>
      <h2>Cambiar Contraseña</h2>

      <ContraseñaInput
        placeholder="Nueva contraseña"
        value={nuevaContra}
        onChange={(e) => setNuevaContra(e.target.value)}
      />

      <ContraseñaInput
        placeholder="Confirmar nueva contraseña"
        value={confirmarContra}
        onChange={(e) => setConfirmarContra(e.target.value)}
      />

      <button type="submit">Confirmar</button>
    </form>
  );
}

export default CambioContra;
