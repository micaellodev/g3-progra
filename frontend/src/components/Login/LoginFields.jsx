import React from 'react';
import TextInput from '../Text/TextInput';

function LoginFields({ email, setEmail, password, setPassword }) {
  return (
    <>
      <TextInput
        placeholder="Correo"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}

export default LoginFields;
