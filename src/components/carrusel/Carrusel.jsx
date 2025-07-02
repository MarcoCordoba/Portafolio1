import React, { useState } from 'react';
import './Carrusel.css'; 


const Carrusel = ({ imagenes }) => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="carrusel">
      <button className="carrusel-btn" onClick={anterior}>←</button>
      <img src={imagenes[index]} alt={`img-${index}`} className="carrusel-img" />
      <button className="carrusel-btn" onClick={siguiente}>→</button>
    </div>
  );
};

export default Carrusel;