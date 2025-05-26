import React from 'react';
import TextInput from '../Text/TextInput';

function RegisterInput({ placeholder, name, type = 'text', value, onChange }) {
  return (
    <TextInput
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default RegisterInput;
