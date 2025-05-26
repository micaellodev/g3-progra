import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import DireccionResumen from '../../components/Direccion/DirecciónResumen';
import { DireccionProvider } from '../../hooks/DireccionContext';

export const OrdenCompletada = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando:', busqueda);
    };

    return (
        <DireccionProvider>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
            <h1>Dashboard</h1>
            <DireccionResumen />
        </DireccionProvider>
    );
};

export default OrdenCompletada;