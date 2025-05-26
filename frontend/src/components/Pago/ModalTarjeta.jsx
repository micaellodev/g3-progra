import React, { useState } from 'react';
import styles from './ModalPagos.module.css';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDinersClub, FaCcDiscover } from 'react-icons/fa';

const ModalTarjeta = ({ visible, onClose, onCreate }) => {
  const [form, setForm] = useState({
    nombre: '',
    numero: '',
    mes: '',
    anio: '',
    cvv: ''
  });

  if (!visible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      ...form,
      vencimiento: form.mes && form.anio ? `${form.mes}/${form.anio.slice(-2)}` : ''
    });
  };

  const meses = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const anios = Array.from({ length: 12 }, (_, i) => String(new Date().getFullYear() + i));

  const handleOverlayClick = (e) => {    
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  function getCardType(number) {
    if (/^4/.test(number)) return 'visa';
    if (/^(5[1-5]|2[2-7])/.test(number)) return 'mastercard';
    if (/^3[47]/.test(number)) return 'amex';
    if (/^3/.test(number)) return 'diners';
    if (/^6/.test(number)) return 'discover';
    return '';
  }

  // Detectar tipo de tarjeta
  const cardType = getCardType(form.numero.replace(/\s/g, ''));
  let CardIcon = null;
  if (cardType === 'visa') CardIcon = <FaCcVisa size={32} color="#1a1f71" />;
  if (cardType === 'mastercard') CardIcon = <FaCcMastercard size={32} color="#eb001b" />;
  if (cardType === 'amex') CardIcon = <FaCcAmex size={32} color="#2e77bb" />;
  if (cardType === 'diners') CardIcon = <FaCcDinersClub size={32} color="#0069aa" />;
  if (cardType === 'discover') CardIcon = <FaCcDiscover size={32} color="#f76b1c" />;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={`${styles.modalContent} ${styles.modalContentGrande}`}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre del titular"
            required
            className={styles.input}
            autoComplete="cc-name"
          />
          {/* Input con ícono */}
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              placeholder="Número de tarjeta"
              required
              maxLength={19}
              className={styles.input}
              autoComplete="cc-number"
              pattern="\d{16,19}"
              inputMode="numeric"
              style={{ paddingRight: 48 }}
            />
            <span style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)'
            }}>
              {CardIcon}
            </span>
          </div>
          <div className={styles.filaInputs}>
            <select
              name="mes"
              value={form.mes}
              onChange={handleChange}
              required
              className={styles.input}
            >
              <option value="">Mes</option>
              {meses.map(mes => (
                <option key={mes} value={mes}>{mes}</option>
              ))}
            </select>
            <select
              name="anio"
              value={form.anio}
              onChange={handleChange}
              required
              className={styles.input}
            >
              <option value="">Año</option>
              {anios.map(anio => (
                <option key={anio} value={anio}>{anio}</option>
              ))}
            </select>
            <input
              type="text"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              placeholder="CVV"
              required
              maxLength={4}
              className={styles.input}
              autoComplete="cc-csc"
              pattern="\d{3,4}"
              inputMode="numeric"
            />
          </div>
          <div className={styles.modalActions}>
            <button type="submit" className={styles.botonContinuar}>Continuar</button>
            <button type="button" onClick={onClose} className={styles.botonCerrar}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTarjeta;