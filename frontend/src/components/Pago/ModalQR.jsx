import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './ModalPagos.module.css';

const ModalQR = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div>
        <h3>Escanea el QR para pagar</h3>
        {/* Aquí podrías poner una imagen de QR */}
        <div >
          <span>QR</span>
        </div>
        <button type="submit" className={styles.botonContinuar}>Continuar</button>
        <button type="button" onClick={onClose} className={styles.botonCerrar}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalQR;