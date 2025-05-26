import React from 'react';
import styles from '../../styles/TextInput.module.css';
import RegisterInput from './RegisterInput';

function RegisterNameRow({ firstname, lastname, onChange }) {
  return (
    <div className={styles.nameRow}>
      <RegisterInput placeholder="Nombre" name="firstname" value={firstname} onChange={onChange} />
      <RegisterInput placeholder="Apellido" name="lastname" value={lastname} onChange={onChange} />
    </div>
  );
}

export default RegisterNameRow;
