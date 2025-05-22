import React from 'react';
import styles from '../../styles/TextInput.module.css';

function TextInput({ placeholder, type = 'text', value, onChange,name}) {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        name={name}
      />
    </div>
  );
}

export default TextInput;
