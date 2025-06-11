import React from "react";
import './Tecnologias.css';	
import Git from "../../icons/Git"
import Github from "../../icons/Github"
import Css from "../../icons/Css"
import Html5 from "../../icons/Html5"
import Python from "../../icons/Python"
import Django from "../../icons/Django"
import PostgreSQL from "../../icons/PostgreSQL"
import ReactI from "../../icons/ReactI"
import Javascript from "../../icons/Javascript"
import Bash from "../../icons/Bash"
import Notion from "../../icons/Notion"
import Jwt from "../../icons/Jwt"


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
                        <Javascript/>                     
                        <ReactI/>                      
                    </div>
                </div>
                <div className="card">
                    <h3>Backend</h3>
                    <div className="tecnologia-icons">
                        <Python/>                      
                        <Django/>            
                        <PostgreSQL/>
                        <Jwt/>
                    </div>
                </div>
                <div className="card">
                    <h3>Herramientas</h3>
                    <div className="tecnologia-icons">
                        <Git />
                        <Github/>
                        <Bash/>
                        <Notion/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tecnologias;