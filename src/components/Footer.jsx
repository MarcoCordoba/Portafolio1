import React from "react";
import "./Footer.css";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 Marco Córdoba</p>
            <div className="footer-redes">
                <a href="https://www.linkedin.com/in/marco-cordoba-/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="icono" />
                </a>
                <a href="https://github.com/MarcoCordoba" target="_blank" rel="noopener noreferrer">
                    <Github className="icono" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
