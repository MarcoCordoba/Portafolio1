import React from "react";
import "../footer/Footer.css";
import LinkedIn from "../../icons/LinkedIn";
import Github from "../../icons/Github";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2025 Marco Córdoba</p>
            <div className="footer-redes">
                <a href="https://www.linkedin.com/in/marco-cordoba-/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="icono-footer" />
                </a>
                <a href="https://github.com/MarcoCordoba" target="_blank" rel="noopener noreferrer">
                    <Github className="icono-footer" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
