import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';

export const MetodoDePago = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando:', busqueda);
    };

    return (
        <>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
            
            
        </>
    );
};

export default MetodoDePago;