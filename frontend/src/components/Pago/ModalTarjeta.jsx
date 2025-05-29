import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './ModalPagos.module.css';

// Iconos tarjetas
import visaImg from '../../assets/Tarjetas/FaCcVisa.svg';
import mastercardImg from '../../assets/Tarjetas/FaCcMastercard.png';
import amexImg from '../../assets/Tarjetas/FaCcAmex.png';
import dinersImg from '../../assets/Tarjetas/FaCcDiners.png';

const ModalTarjeta = ({ visible, onClose, onCreate }) => {
  const [form, setForm] = useState({
    nombre: '',
    numero: '',
    mes: '',
    anio: '',
    cvv: ''
  });

  const navigate = useNavigate(); 

  if (!visible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  // Redirige a la página de orden completada
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      ...form,
      vencimiento: form.mes && form.anio ? `${form.mes}/${form.anio.slice(-2)}` : ''
    });
    navigate('/ordencompletada');
  };

  const meses = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const anios = Array.from({ length: 12 }, (_, i) => String(new Date().getFullYear() + i));

  // Función para detectar el tipo de tarjeta
  function getCardType(number) {
    if (/^4/.test(number)) return 'visa';
    if (/^(5[1-5]|2[2-7])/.test(number)) return 'mastercard';
    if (/^3[47]/.test(number)) return 'amex';
    if (/^3/.test(number)) return 'diners';
    return '';
  }

  // Detectar tipo de tarjeta
  const cardType = getCardType(form.numero.replace(/\s/g, ''));
  let CardIcon = null;
  if (cardType === 'visa') CardIcon = <img src={visaImg} alt="Visa" className={styles.cardIcon} />;
  if (cardType === 'mastercard') CardIcon = <img src={mastercardImg} alt="Mastercard" className={styles.cardIcon} />;
  if (cardType === 'amex') CardIcon = <img src={amexImg} alt="American Express" className={styles.cardIcon} />;
  if (cardType === 'diners') CardIcon = <img src={dinersImg} alt="Diners Club" className={styles.cardIcon} />;

  return (
    <div className={styles.modalOverlay}>
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
          <div className={styles.inputIconWrapper}>
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
              pattern="\d{14,19}"
              inputMode="numeric"
            />
            <span className={styles.inputIcon}>
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
