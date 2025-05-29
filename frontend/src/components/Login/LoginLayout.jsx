import React from 'react';
import LoginInputs from './LoginInputs';
import LoginLinks from './LoginLinks';

function LoginLayout({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="title">Iniciar Sesión</h2>
      <LoginInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginLinks />
      <div className="actions">
        <button type="submit" className="button">Ingresar</button>
      </div>
    </form>
  );
}

export default LoginLayout;
