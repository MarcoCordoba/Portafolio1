import React from "react";
import "./proyectos.css";

// Importando iconos desde la carpeta "icons"
import Css from "../../icons/Css"
import Html5 from "../../icons/Html5"
import Python from "../../icons/Python"
import Django from "../../icons/Django"
import PostgreSQL from "../../icons/PostgreSQL"
import ReactI from "../../icons/ReactI"
import Javascript from "../../icons/Javascript"
import GitHub from "../../icons/Github"

//Importando imagenes representativas de los proyectos
import notetask from "../../assets/images/notetask.jpg";
import Negro from "../../assets/Images/Negro.jpg"


const proyectos = [
  {
    titulo: "Gestor de Reservas",
    descripcion: "Aplicación web para que un usuario gestione el alquiler temporal de inmuebles",
    imagen: notetask,
    tecnologias: [<Django />,<Python/>, <PostgreSQL />, <Html5 />, <Css />,<Javascript/>, <ReactI/>],
    github: "https://github.com/MarcoCordoba/Gestor_reservas.git",
  },
  {
    titulo: "Portafolio Web",
    descripcion: "Portafolio personal realizado para demostrar mis habilidades como desarrollador",
    imagen: Negro,
    tecnologias: [ <Html5 />, <Css />, <Javascript />, <ReactI />],
    github: "https://github.com/MarcoCordoba/Portafolio1.git",
  },
  {
    titulo: "Gestor de Tareas",
    descripcion: "Aplicacion para administrar las tareas de un usuario registrado y logeado.",
    imagen: Negro,
    tecnologias: [<Python />, <Django />, <PostgreSQL />, <Html5 />, <Css />, <Javascript />,<ReactI/> ],
    github: "https://github.com/MarcoCordoba/app_notas.git",
  },
];

const Proyectos = () => {
  return (
    <section className="proyectos" id="Proyectos">
      <h2 className="proyectos-title">Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-img" />
            <div className="proyecto-content">
              <h3 className="proyecto-title">{proyecto.titulo}</h3>
              <p className="proyecto-desc">{proyecto.descripcion}</p>
              <div className="proyecto-tech">
                {proyecto.tecnologias.map((icono, i) => (
                  <span className="tech-icon" key={i}>{icono}</span>
                ))}
              </div>
              <div className="proyecto-links">
                <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="proyecto-icon github-btn">
                  <GitHub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
