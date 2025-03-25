import React from "react";
import Perfil from '../assets/images/Perfil.jpg';
import './Home.css';

const Home = () => {
    return(
        <section className="home">
            <div className="home-texto">
                <h1>Marco Cordoba</h1>
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="home-imagen">
                <img src={Perfil} alt="marco cordoba" />
            </div>
        </section>
    )
}

export default Home;