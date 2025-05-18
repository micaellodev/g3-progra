import React from 'react';
import './Carrito.css';

function Carrito() {
  return (
    <div className="carrito-wrapper" style={{ display: 'flex', gap: '40px', margin: '30px' }}>
      <div style={{ flex: 3 }}>
        <h1>Carrito de Compras</h1>
        <div
          style={{
            border: '1px solid #ccc',
            height: '300px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px'
          }}
        >
          {/* Aquí agregarás los juegos que el usuario agregue al carrito */}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f0f0f0',
          height: 'fit-content',
          minWidth: '250px'
        }}
      >
        <h3 style={{ marginBottom: '15px' }}>Resumen de compra</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Juegos (0)</span>
          <span>S/. 0.0</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Descuentos</span>
          <span>-S/. 0.0</span>
        </div>
        <hr />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
            marginTop: '8px',
            marginBottom: '20px'
          }}
        >
          <span>Total</span>
          <span>S/. 0.0</span>
        </div>
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Continuar compra')}
        >
          Continuar compra
        </button>
      </div>
    </div>
  );
}

export default Carrito;
