// src/pages/admin/ListaOrdenes.jsx

import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import BuscadorConBotones from '../../components/Lista/BuscadorConBotones';
import OrdenesTable from '../../components/Table/OrdenesTable';

export const ListaOrdenes = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Buscando orden:', busqueda);
    };

    return (
        <>
            <TopBar handleSearch={handleSearch} busqueda={busqueda} setBusqueda={setBusqueda} />
            <h1>Lista de Órdenes</h1>
            <BuscadorConBotones
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                handleSearch={handleSearch}
            />
            <OrdenesTable busqueda={busqueda} />
        </>
    );
};

export default ListaOrdenes;

