import React from "react";
import "./proyectos.css";


import Css from "../../icons/Css";
import Html5 from "../../icons/Html5";
import Python from "../../icons/Python";
import Django from "../../icons/Django";
import PostgreSQL from "../../icons/PostgreSQL";
import ReactI from "../../icons/ReactI";
import Javascript from "../../icons/Javascript";
import GitHub from "../../icons/Github";

import notetask from "../../assets/images/notetask.jpg";
import Negro from "../../assets/Images/Negro.jpg";

const proyectos = [
  {
    titulo: "Gestor de Reservas",
    descripcion: "Aplicación web para que un usuario gestione el alquiler temporal de inmuebles.",
    imagen: notetask,
    tecnologias: [
      <Django />,
      <Python />,
      <PostgreSQL />,
      <Html5 />,
      <Css />,
      <Javascript />,
      <ReactI />,
    ],
    github: [
      {url: "https://github.com/MarcoCordoba/front_gestor_reservas" },
      {url: "https://github.com/MarcoCordoba/back_gestor_reservas" },
    ],
  },
  {
    titulo: "Portafolio Web",
    descripcion: "Portafolio personal realizado para demostrar mis habilidades como desarrollador.",
    imagen: Negro,
    tecnologias: [<Html5 />, <Css />, <Javascript />, <ReactI />],
    github: [
      {url: "https://github.com/MarcoCordoba/Portafolio1.git" },
    ],
  },
  {
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación para administrar las tareas de un usuario registrado y logueado.",
    imagen: Negro,
    tecnologias: [
      <Python />,
      <Django />,
      <PostgreSQL />,
      <Html5 />,
      <Css />,
      <Javascript />,
      <ReactI />,
    ],
    github: [
      { url: "https://github.com/MarcoCordoba/app_notas.git" },
    ],
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
                  <span className="tech-icon" key={i}>
                    {icono}
                  </span>
                ))}
              </div>
              <div className="proyecto-links">
                {proyecto.github.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-icon github-btn"
                  >
                    {link.label} <GitHub />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
