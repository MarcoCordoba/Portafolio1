import React from "react";
import "./Contacto.css";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";

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

           
        </section>
    )
}

export default Contacto;