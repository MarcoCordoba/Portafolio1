import React from "react";
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <a href="#home" className="nombre_nav">Marco Cordoba Dev</a>
            <ul>
                <li><a href="#Sobre-mi" className="a">Sobre mi</a></li>
                <li><a href="#Proyectos" className="a">Proyectos</a></li>
                <li><a href="#Tecnologias" className="a">Tecnologias</a></li>
                <li><a href="#Contacto" className="a">Contactame</a></li>
            </ul>
        </nav>
    )   
};
export default Navbar;

