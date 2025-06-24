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
                        <span title="CSS"><Css/></span>
                        <span title="HTML"> <Html5/></span>
                        <span title="JAVASCRIPT"><Javascript/> </span>
                        <span title="REACT"> <ReactI/></span>                                             
                    </div>
                </div>
                <div className="card">
                    <h3>Backend</h3>
                    <div className="tecnologia-icons">
                        <span title="PYTHON"> <Python/></span>
                        <span title="DJANGO"> <Django/> </span>
                        <span title="POSTGRESQL"><PostgreSQL/></span>
                        <span title="JWT"><Jwt/></span>
                    </div>
                </div>
                <div className="card">
                    <h3>Herramientas</h3>
                    <div className="tecnologia-icons">
                        <span title="GIT"><Git /></span>
                        <span title="GITHUB"><Github/></span>
                        <span title="BASH"><Bash/></span>
                        <span title="NOTION"><Notion/></span>                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tecnologias;