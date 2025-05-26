import React from 'react';

const ModalQR = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.45)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#fff', borderRadius: 18, padding: 32, minWidth: 300,
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <h3>Escanea el QR para pagar</h3>
        {/* Aquí podrías poner una imagen de QR */}
        <div style={{
          width: 180, height: 180, background: '#eee',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '24px 0', borderRadius: 12
        }}>
          <span>QR</span>
        </div>
        <button onClick={onClose} style={{
          background: '#111', color: '#fff', border: 'none',
          borderRadius: 8, padding: '10px 24px', fontWeight: 600, cursor: 'pointer'
        }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalQR;