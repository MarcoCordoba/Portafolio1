import React from "react";
import './Tecnologias.css';	
import Git from "./icons/Git"
import Github from "./icons/Github"
import Css from "./icons/Css"
import Html5 from "./icons/Html5"
import Python from "./icons/Python"
import Django from "./icons/Django"
import PostgreSQL from "./icons/PostgreSQL"
import ReactI from "./icons/ReactI"

const Tecnologias = () =>{
    return(
        <section className="tecnologias" id="Tecnologias">
            <h2 className="tecnologias-titulo">Tecnologias</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Frontend</h3>
                    <div className="tecnologia-icons">
                        <Css/>
                        <Html5/>
                        <ReactI/>
                    </div>
                </div>
                <div className="card">
                    <h3>Backend</h3>
                    <div className="tecnologia-icons">
                        <Python/>
                        <Django/>
                        <PostgreSQL/>
                    </div>
                </div>
                <div className="card">
                    <h3>Herramientas</h3>
                    <div className="tecnologia-icons">
                        <Git />
                        <Github/> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tecnologias;