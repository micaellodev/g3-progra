import React from 'react';

const SelectorMetodoPago = ({ metodoPago, setMetodoPago }) => (
  <>
    <div>
      <label>
        <input
          type="radio"
          name="metodoPago"
          value="qr"
          checked={metodoPago === 'qr'}
          onChange={e => setMetodoPago(e.target.value)}
        />
        QR (Yape / Plin)
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="metodoPago"
          value="tarjeta"
          checked={metodoPago === 'tarjeta'}
          onChange={e => setMetodoPago(e.target.value)}
        />
        Tarjeta de Crédito/Débito
      </label>
    </div>
  </>
);

export default SelectorMetodoPago;