import React from "react";
import './SobreMi.css';

const SobreMi = () => {
    return(
        <section className="sobre-mi" id="Sobre-mi">
            <div className="cuadrado">
                <h2>Sobre Mi</h2>
                <p>Soy marco cordoba, estudiante avanzado de ingenieria en sistemas de informacion, y programador Full-Stack.
                     Tengo 23 años y  
                </p>
            </div>
            <div className="cuadrado">
                <h2>Experiencia</h2>
                <ul>
                    <li>desarrollador autodidacta</li>
                    <li>enpresa nestle</li>
                    <li>empresa dnkfa</li>
                </ul>
            </div>
        </section>
    )
}

export default SobreMi;