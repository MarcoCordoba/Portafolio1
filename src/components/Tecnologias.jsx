import React from "react";
import './Tecnologias.css';	

const Tecnologias = () =>{
    return(
        <section className="tecnologias" id="Tecnologias">
            <h2 className="tecnologias-titulo">Tecnologias</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Frontend</h3>
                    <div className="tecnologia-icons">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="card">
                    <h3>Backend</h3>
                    <div className="tecnologia-icons">
                    <img src="dfsg" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="card">
                    <h3>Herramientas</h3>
                    <div className="tecnologia-icons">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tecnologias;