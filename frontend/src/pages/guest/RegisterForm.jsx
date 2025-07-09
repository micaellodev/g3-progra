import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import RegisterFormContent from '../../components/Register/RegisterFormContent';
import Footer from '../../components/Footer/Footer';
import { crearUsuario } from '../../services/usuarioService'; // Importar el servicio
import styles from '../../styles/RegisterForm.module.css';

function RegisterForm() {
  const { register } = useLogin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    clinic: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    // Validar campos obligatorios
    if (!formData.firstname.trim()) {
      setError('El nombre es obligatorio');
      return false;
    }
    if (!formData.lastname.trim()) {
      setError('El apellido es obligatorio');
      return false;
    }
    if (!formData.email.trim()) {
      setError('El correo es obligatorio');
      return false;
    }
    if (!formData.country.trim()) {
      setError('El país es obligatorio');
      return false;
    }
    if (!formData.clinic.trim()) {
      setError('La clínica es obligatoria');
      return false;
    }
    if (!formData.password.trim()) {
      setError('La contraseña es obligatoria');
      return false;
    }
    if (formData.password !== formData.password2) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('El formato del correo no es válido');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');

    try {
      // Mapear los campos del frontend a los del backend
      const usuarioData = {
        nombre: formData.firstname,
        apellido: formData.lastname,
        correo: formData.email,
        pais: formData.country,
        clinica: formData.clinic,
        contrasena: formData.password
      };

      // Llamar a la función del servicio para crear usuario
      const resultado = await crearUsuario(usuarioData);
      
      console.log('Usuario creado exitosamente:', resultado);
      
      // Si usas un contexto de login, puedes actualizar el estado aquí
      // Por ejemplo, si quieres loguear automáticamente al usuario después del registro:
      // await register(usuarioData);
      
      // Mostrar mensaje de éxito
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      
      // Redirigir al login
      navigate('/login');
      
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      
      // Manejar diferentes tipos de errores del backend
      if (error.message.includes('correo ya está registrado')) {
        setError('Este correo ya está registrado. Intenta con otro.');
      } else if (error.message.includes('campos obligatorios')) {
        setError('Todos los campos son obligatorios');
      } else if (error.message.includes('Error al crear usuario')) {
        setError('Error al crear la cuenta. Verifica los datos e intenta nuevamente.');
      } else {
        setError('Error de conexión. Intenta nuevamente más tarde.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registerPage}> 
      <RegisterFormContent
        formData={formData}
        error={error}
        isLoading={isLoading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default RegisterForm;