import React from "react";
import "./proyectos.css";

const proyectos = [
  {
    titulo: "Gestor de Reservas",
    descripcion: "Aplicación web para gestionar alquileres temporales con Django y PostgreSQL.",
    imagen: "/assets/gestor-reservas.png", // Colocá la imagen en assets
    github: "https://github.com/tuusuario/gestor-reservas",
  },
  {
    titulo: "Portafolio Web",
    descripcion: "Mi portafolio personal hecho con React y CSS.",
    imagen: "/assets/portafolio.png",
    github: "https://github.com/tuusuario/portafolio-web",
  },
  {
    titulo: "App de gestion de tareas",
    descripcion: "App con login para administrar las tareas de cada usuario. Creada con django, postgresql, html, css y javascript ",
    imagen: "/assets/ecommerce.png",
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
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="github-link">
              Ver código en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
