import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLogin } from '../../hooks/LoginContext';
import PerfilContenido from '../../components/Perfil/PerfilContenido';
import AtrasBoton from '../../components/Perfil/AtrasBoton';
import Footer from '../../components/Footer/Footer';
import styles from "../../styles/Perfil.module.css";

function Perfil() {
  const { currentUser, updateUser } = useLogin();
  const navigate = useNavigate();
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    console.log('Current user:', currentUser);
  }, [currentUser]);

 const handleGuardar = async (data) => {
  try {
    const datosParaBackend = {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo || data.email,  // usa email si no viene correo
      pais: data.pais
    };

    await updateUser(datosParaBackend);  // llama al hook
    setEditando(false);
    alert('Datos actualizados correctamente');
  } catch (error) {
    console.error('Error updating user:', error);
    alert('Error al actualizar los datos');
  }
};

  const handleCambiarContrasena = () => {
    navigate('/cambiocontra');
  };

  const handleEditar = () => {
    setEditando(true);
  };

  const handleVolver = () => {
    navigate('/'); 
  };

  // Estado de carga - INCLUYE el botón aquí también
  if (currentUser === undefined) {
    return (
      <main className={styles.pageWrapper}>
        <div className={styles.botonesContainer}>
          <AtrasBoton onClick={handleVolver} />
        </div>
        <div className={styles.perfilContainer}>
          <h2>Cargando...</h2>
        </div>
        <Footer />
      </main>
    );
  }

  // Estado normal - cuando ya terminó de cargar
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.botonesContainer}>
        <AtrasBoton onClick={handleVolver} />
      </div>
      
      {!currentUser ? (
        <div className={styles.perfilContainer}>
          <h2>No has iniciado sesión</h2>
          <p>
            Por favor, <Link to="/login">inicia sesión</Link> para ver tu perfil.
          </p>
        </div>
      ) : (
        <PerfilContenido
          currentUser={currentUser}  
          editando={editando}
          setEditando={setEditando}
          onGuardar={handleGuardar}
          onEditar={handleEditar}  
          onCambiarContrasena={handleCambiarContrasena}
        />
      )}
      
      <Footer />
    </main>
  );
}

export default Perfil;

