import React from 'react';
import TextInput from '../Text/TextInput';
import styles from '../../styles/RegisterForm.module.css';

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
