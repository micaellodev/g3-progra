import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './ModalPagos.module.css';

const ModalQR = ({ visible, onClose }) => {
  const navigate = useNavigate(); // Inicializa navigate para redirigir

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirige directamente a la página de orden completada
    navigate('/ordencompletada');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Escanea el QR para pagar</h3>
        {/* Aquí podrías poner una imagen de QR */}
        <div className={styles.qrPlaceholder}>
          <span>QR</span>
        </div>
        <button type="button" onClick={handleSubmit} className={styles.botonContinuar}>
          Continuar
        </button>
        <button type="button" onClick={onClose} className={styles.botonCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalQR;