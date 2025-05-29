import React from 'react';
import RegisterInput from './RegisterInput';
import RegisterNameRow from './RegisterNameRow';
import RegisterLinks from './RegisterLinks';
import styles from '../../styles/RegisterForm.module.css';

function RegisterFormContent({ formData, error, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.registerForm}>
      <h2 className={styles.title}>Registrarse</h2>

      <RegisterNameRow
        firstname={formData.firstname}
        lastname={formData.lastname}
        onChange={onChange}
      />
      <RegisterInput
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={onChange}
      />
      <RegisterInput
        name="country"
        placeholder="País"
        value={formData.country}
        onChange={onChange}
      />
      <RegisterInput
        name="clinic"
        placeholder="Clínica donde naciste"
        value={formData.clinic}
        onChange={onChange}
      />
      <RegisterInput
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={onChange}
      />
      <RegisterInput
        name="password2"
        type="password"
        placeholder="Confirmar contraseña"
        value={formData.password2}
        onChange={onChange}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" className={styles.button}>Registrarse</button>
      <RegisterLinks />
    </form>
  );
}

export default RegisterFormContent;