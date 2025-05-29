import React from 'react';

function LoginInputs({ email, setEmail, password, setPassword }) {
  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
    </>
  );
}

export default LoginInputs;