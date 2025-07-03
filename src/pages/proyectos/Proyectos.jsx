import React, {use, useState} from "react";
import "./proyectos.css";

import Carrusel  from "../../components/carrusel/Carrusel";
import Modal from "../../components/modal/Modal"

import Css from "../../icons/Css";
import Html5 from "../../icons/Html5";
import Python from "../../icons/Python";
import Django from "../../icons/Django";
import PostgreSQL from "../../icons/PostgreSQL";
import ReactI from "../../icons/ReactI";
import Javascript from "../../icons/Javascript";
import GitHub from "../../icons/Github";
import Jwt from "../../icons/Jwt";  

import notetask_Login from "../../assets/Imagenes_Proyectos/Notas/Login.png";
import notetask_Create  from "../../assets/Imagenes_Proyectos/Notas/Create.png";
import notetask_Edit from "../../assets/Imagenes_Proyectos/Notas/Edit.png";
import notetask_Home from "../../assets/Imagenes_Proyectos/Notas/Home.png";
import notetask_Register from "../../assets/Imagenes_Proyectos/Notas/Register.png";

import Negro from "../../assets/Images/Negro.jpg";
import JWT from "../../icons/Jwt";


const proyectos = [ 
  {
    titulo: "Gestor de Notas",
    descripcion: "Aplicación web para gestionar notas de un usuario.",
    descripcionLarga: `Aplicación web desarrollada para que los usuarios puedan registrarse e iniciar sesión de forma segura usando 
    la tecnologia de JWT para validar a los usuarios y permisos del mismo.
    Una vez autenticados, tienen la posibilidad de crear, editar, eliminar y visualizar notas personales, gestionando su contenido
    de manera simple y eficiente desde una interfaz intuitiva.`,
    imagen: [notetask_Home],
    imagenes: [notetask_Home, notetask_Create, notetask_Edit, notetask_Login, notetask_Register],
    tecnologias: [
      <Django />,
      <Python />,
      <JWT/>,
      <Html5 />,
      <Css />,
      <Javascript />,
      <ReactI />,
    ],
    github: [
      {url: "https://github.com/MarcoCordoba/App-Notas-Frontend" },
      {url: "https://github.com/MarcoCordoba/App-Notas-Backend" },
    ],
  },
  {
    titulo: "Portafolio Web",
    descripcion: "Portafolio personal realizado para demostrar mis habilidades como desarrollador.",
    descripcionLarga: "esta es una descripcion larga de prueba",
    imagen: Negro,
    tecnologias: [<Html5 />, <Css />, <Javascript />, <ReactI />],
    github: [
      {url: "https://github.com/MarcoCordoba/Portafolio1.git" },
    ],
  },
  {
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación para administrar las tareas de un usuario registrado y logueado.",
    descripcionLarga: "esta es una descripcion larga de prueba",
    imagen: Negro,
    tecnologias: [
      <Python />,
      <Django />,
      <PostgreSQL />,
      <Html5 />,
      <Css />,
      <Javascript />,
      <ReactI />,
      <Jwt/>
    ],
    github: [
      { url: "https://github.com/MarcoCordoba/app_notas.git" },
    ],
  },
];

const Proyectos = () => {
  
 
  const[isModalOpen, setIsModalOpen] = useState(false);
  const[proyectoActivo, setProyectoActivo] = useState(null);


  const handleOpen = (proyecto) => {
    setProyectoActivo(proyecto);
    setIsModalOpen(true);
  };
  
  const handleClose = () => setIsModalOpen(false);
  
 
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
                <button onClick={() => handleOpen(proyecto)}   className="proyecto-info-btn">
                  Mas Info
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        {proyectoActivo && (
          <div>
            <h2>{proyectoActivo.titulo}</h2>
             {proyectoActivo.imagenes && proyectoActivo.imagenes.length > 0 && (
            <Carrusel imagenes={proyectoActivo.imagenes} />
            )}
            <p className="descripcion-larga">{proyectoActivo.descripcionLarga}</p>
            <div className="proyecto-tech">
                {proyectoActivo.tecnologias.map((icono, i) => (
                  <span className="tech-icon" key={i}>
                    {icono}
                  </span>
                ))}
            </div>
            
            <div className="proyecto-links">
                {proyectoActivo.github.map((link, i) => (
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
        )}
      </Modal>
    </section>
  );
};

export default Proyectos;
