// RegisterNameRow.jsx
import React from 'react';
import styles from '../../styles/RegisterForm.module.css'; 
import RegisterInput from './RegisterInput';

function RegisterNameRow({ formData, onChange }) {
  return (
    <div className={styles.nameRow}> 
      <RegisterInput
        placeholder="Nombre"
        name="firstname"
        value={formData.firstname}
        onChange={onChange}
      />
      <RegisterInput
        placeholder="Apellido"
        name="lastname"
        value={formData.lastname}
        onChange={onChange}
      />
    </div>
  );
}
export default RegisterNameRow;
