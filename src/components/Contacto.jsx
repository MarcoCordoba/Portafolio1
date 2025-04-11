import React from "react";
import "./Contacto.css";
import Gmail from "./icons/Gmail";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";

const Contacto = () => {
  return (
    <section className="contacto" id="Contacto">
      <h2>Contacto</h2>

      <div className="contacto-contenido">
        <div className="contacto-enlaces">
          <a
            href="marco.cba2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-card"
          >
            <div className="icon-wrapper">
              <Gmail />
            </div>
            <h3>Correo</h3>
            <p>marco.cba2@gmail.com</p>
          </a>

          <a
            href="https://github.com/MarcoCordoba"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-card"
          >
            <div className="icon-wrapper">
              <Github />
            </div>
            <h3>GitHub</h3>
            <p>MarcoCordoba</p>
          </a>

          <a
            href="www.linkedin.com/in/marco-cordoba-"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-card"
          >
            <div className="icon-wrapper">
              <LinkedIn />
            </div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/marco-cordoba-</p>
          </a>
        </div>

        <div className="contacto-mensaje">
          <h3>Envíame un mensaje</h3>
          <form action="">
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="mail" placeholder="Email" required />
            <textarea name="Mensaje" placeholder="Escribe el mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto
