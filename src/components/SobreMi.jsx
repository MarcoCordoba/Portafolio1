import React from "react";
import './SobreMi.css';

const SobreMi = () => {
    return (
        <section className="sobre-mi" id="Sobre-mi">
            <div className="sobre-mi-wrapper">
                <div className="cuadrado">
                    <h2>Sobre Mi</h2>
                    <p>¡Hola! Soy Marco Córdoba, estudiante avanzado de ingeniería en sistemas de información y programador Full-Stack. 
                        Actualmente perfecciono mis habilidades técnicas tanto en proyectos personales como en mi formación académica, 
                        complementado mi aprendizaje facultativo con estudio autónomo.  
                    </p>
                </div>
                <div className="cuadrado">
                    <h2>Experiencia</h2>
                    <p>Programador Freelancer (2023-Actualidad): Me encuentro desarrollando mis habilidades en proyectos personales,
                        como también proyectos que se incluyen en mi formación universitaria.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
