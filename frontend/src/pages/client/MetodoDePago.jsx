import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';

export const MetodoDePago = () => {
    const [busqueda, setBusqueda] = useState('');
    const [metodoPago, setMetodoPago] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando:', busqueda);
    };

    const handleContinuar = () => {
        console.log('Método de pago seleccionado:', metodoPago);
        // Aquí podrías redirigir a la siguiente etapa o guardar en contexto
    };

    return (
        <>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />

            <div style={{ padding: '1rem' }}>
                <h2>Selecciona tu método de pago</h2>

                <div>
                    <label>
                        <input
                            type="radio"                        
                            value="qr"
                            checked={metodoPago === 'qr'}
                            onChange={(e) => setMetodoPago(e.target.value)}
                        />
                        QR (Yape / Plin)
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            type="radio" name="metodoPago" value="tarjeta"
                            checked={metodoPago === 'tarjeta'}
                            onChange={(e) => setMetodoPago(e.target.value)}
                        />
                        Tarjeta de Crédito/Débito
                    </label>
                </div>

                <button onClick={handleContinuar} style={{ marginTop: '1rem' }}>
                    Continuar
                </button>
            </div>
        </>
    );
};

export default MetodoDePago;
