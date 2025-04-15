import React from "react";
import Perfil from '../assets/images/Perfil.jpg';
import './Home.css';
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-texto">
                <h1>Marco Cordoba</h1>
                <h2>Full-Stack Developer</h2>

                <div className="iconos-redes">
                    <a
                        href="https://www.linkedin.com/in/marco-cordoba-/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn className="icono" />
                    </a>
                    <a
                        href="https://github.com/MarcoCordoba"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="icono" style={{ fill: "black" }} />
                    </a>
                    <a
                        href="/Cordoba_Marco_cv.pdf"
                        download
                        className="download-cv-boton"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>

            <div className="home-imagen">
                <img src={Perfil} alt="marco cordoba" />
            </div>
        </section>
    );
};

export default Home;
