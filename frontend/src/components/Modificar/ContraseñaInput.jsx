import React from 'react';

const ContraseñaInput = ({ placeholder, value, onChange }) => (
  <input
    type="password"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
  />
);

export default ContraseñaInput;