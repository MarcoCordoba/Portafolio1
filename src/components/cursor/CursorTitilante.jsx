import React, { useState, useEffect } from 'react';
import './CursorTitilante.css';

const CursorTitilante = ({ texto, className }) => {
    const [mostrarCursor, setMostrarCursor] = useState(true);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setMostrarCursor(prev => !prev);
        }, 500);


        return () => clearInterval(intervalo);
    }, []); 

    return (
        <span className={`titulo-con-cursor ${className || ''}`}>
            {texto}
            <span className={`cursor ${mostrarCursor ? 'visible' : 'invisible'}`}>|</span>
        </span>
    );
};

export default CursorTitilante;