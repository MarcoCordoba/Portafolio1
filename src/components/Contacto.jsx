import React from "react";
import "./Contacto.css";

const Contacto = () => {
    return(
        <section className="contacto" id="Contacto">
            <h2>Contacto</h2>
            
            <div className="contacto-mensaje">
                <h3>Enviame un mensaje</h3>
                <form action="">
                    <input type="text" name="nombre" placeholder="Nombre" required/>
                    <input type="email" name= "mail" placeholder="Email" required />
                    <textarea name="Mensaje" placeholder="Escribe el mensaje"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="contacto-informacion">
                <h3>Redes de contacto</h3>
                <ul>
                    <li> <a href="https://www.linkedin.com/in/marco-cordoba-/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/MarcoCordoba" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </div>
            
        </section>
    )
}

export default Contacto;