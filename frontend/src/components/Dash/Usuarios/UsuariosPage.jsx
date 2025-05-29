// UsuariosPage.jsx
import React, { useState } from 'react';
import { usuarios } from '../../../constantes/consts';
import UsuariosTabla from './UsuariosTabla';
import UsuarioDetalleCard from './UsuarioDetalleCard';

const UsuariosPage = () => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const handleVerDetalle = (usuarioId) => {
    const usuario = usuarios.find(u => u.id === usuarioId);
    setUsuarioSeleccionado(usuario);
  };

  return (
    <div>
      {/* Sección de la tabla */}
      <UsuariosTabla onVerDetalle={handleVerDetalle} />

      {/* Sección del detalle */}
      {usuarioSeleccionado && (
        <UsuarioDetalleCard usuario={usuarioSeleccionado} />
      )}
    </div>
  );
};

export default UsuariosPage;
