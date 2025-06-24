import './SobreMi.css';

const SobreMi = () => {
    return (
        <section className="sobre-mi" id="Sobre-mi">
            <div className="sobre-mi-wrapper">
                <div className="cuadrado">
                    <h2>Sobre Mi</h2>
                    <p>¡Hola! Mi nombre es Marco Córdoba, estudiante avanzado de la carrera ingeniería en sistemas de información y
                        programador Full-Stack, utilizando principalmente tecnologias como React y Django.
                        Actualmente perfecciono mis habilidades técnicas tanto en proyectos personales como en mi formación académica,
                        complementado mi aprendizaje facultativo con estudio autónomo.
                    </p>
                </div>
                <div className="cuadrado">
                    <h2>Experiencia</h2>
                    <div className="experiencia-item">
                        <ul>
                            <li className="experiencia-titulo">Programador Autodidacta <span>(2023 - Actualidad)</span>: <span style={{ fontSize: '0.9em', }}>Desarrollo de
                                aplicaciones web, desde el diseño de la interfaz hasta la implementacion de api's y bases de datos.
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
