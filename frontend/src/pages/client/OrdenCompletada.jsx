import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';

export const OrdenCompletada = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando:', busqueda);
    };

    return (
        <>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
            
            <h1>Dashboard</h1>
        </>
    );
};

export default OrdenCompletada;