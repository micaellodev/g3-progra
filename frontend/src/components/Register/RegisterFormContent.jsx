import React from 'react';
import RegisterInput from './RegisterInput';
import RegisterNameRow from './RegisterNameRow';
import RegisterLinks from './RegisterLinks';
import RegisterButton from './RegisterButton';
import styles from '../../styles/RegisterForm.module.css';

function RegisterFormContent({ formData, error, isLoading, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <h2 className={styles.title}>Registrarse</h2>
      
      <RegisterNameRow 
        formData={formData} 
        onChange={onChange} 
      />
      
      <RegisterInput
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={onChange}
        required
      />
      
      <RegisterInput
        name="country"
        type="text"
        placeholder="País"
        value={formData.country}
        onChange={onChange}
        required
      />
      
      <RegisterInput
        name="clinic"
        type="text"
        placeholder="Clínica donde naciste"
        value={formData.clinic}
        onChange={onChange}
        required
      />
      
      <RegisterInput
        name="password"
        type="password"
        placeholder="Contraseña (mínimo 6 caracteres)"
        value={formData.password}
        onChange={onChange}
        required
      />
      
      <RegisterInput
        name="password2"
        type="password"
        placeholder="Confirmar contraseña"
        value={formData.password2}
        onChange={onChange}
        required
      />

      {error && <div className={styles.error}>{error}</div>}

      <RegisterButton isLoading={isLoading} />
      <RegisterLinks />
    </form>
  );
}

export default RegisterFormContent;