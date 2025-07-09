import React from 'react';

function PerfilView({ usuario, onEditar, onCambiarContrasena }) {
  if (!usuario) return <p>Error: usuario no encontrado.</p>;

  const containerStyles = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyles = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: '300'
  };

  const fieldStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
    alignItems: 'center'
  };

  const labelStyles = {
    fontWeight: 'bold',
    color: '#555',
    minWidth: '120px'
  };

  const valueStyles = {
    color: '#333',
    flex: 1,
    textAlign: 'right'
  };

  const buttonContainerStyles = {
    textAlign: 'center',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #eee'
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s'
  };

  const secondaryButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#6c757d'
  };

  return (
    <div style={containerStyles}>
      <h2 style={headerStyles}>Mi Perfil</h2>
      
      <div style={fieldStyles}>
        <span style={labelStyles}>Nombre:</span>
        <span style={valueStyles}>{usuario.nombre || 'No especificado'}</span>
      </div>
      
      <div style={fieldStyles}>
        <span style={labelStyles}>Apellido:</span>
        <span style={valueStyles}>{usuario.apellido || 'No especificado'}</span>
      </div>
      
      <div style={fieldStyles}>
        <span style={labelStyles}>Email:</span>
        <span style={valueStyles}>{usuario.correo || usuario.email || 'No especificado'}</span>
      </div>
      
      <div style={fieldStyles}>
        <span style={labelStyles}>País:</span>
        <span style={valueStyles}>{usuario.pais || usuario.país || 'No especificado'}</span>
      </div>
      
      {usuario.telefono && (
        <div style={fieldStyles}>
          <span style={labelStyles}>Teléfono:</span>
          <span style={valueStyles}>{usuario.telefono}</span>
        </div>
      )}
      
      {usuario.fechaNacimiento && (
        <div style={fieldStyles}>
          <span style={labelStyles}>Fecha de Nacimiento:</span>
          <span style={valueStyles}>{usuario.fechaNacimiento}</span>
        </div>
      )}
      
      <div style={buttonContainerStyles}>
        <button 
          style={buttonStyles}
          onClick={onEditar}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Editar Perfil
        </button>
        
        {onCambiarContrasena && (
          <button 
            style={secondaryButtonStyles}
            onClick={onCambiarContrasena}
            onMouseOver={(e) => e.target.style.backgroundColor = '#545b62'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          >
            Cambiar Contraseña
          </button>
        )}
      </div>
    </div>
  );
}

export default PerfilView;