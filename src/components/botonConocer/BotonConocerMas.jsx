import React from 'react';
import './BotonConocerMas.css';

const BotonConocerMas = () => {
  const handleClick = () => {
    const targetSection = document.getElementById('Sobre-mi'); 
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator" onClick={handleClick}>
      <span className="scroll-text">Conoce más</span>
      <span className="arrow">&#8595;</span>
    </div>
  );
};

export default BotonConocerMas;
