import React from 'react';
import { Link } from 'react-router-dom';

function LoginLinks() {
  return (
    <p>
      <Link to="/register">Registrarse</Link> | <Link to="/recuperarcontra">¿Olvidaste tu contraseña?</Link>
    </p>
  );
}

export default LoginLinks;