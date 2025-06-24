import '../navbar/navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <a href="#home" className="nombre_nav">{`{ MARCO / DEV }`}</a>
            <ul className="nav-links">
                <li><a href="#Sobre-mi" >Sobre mi</a></li>
                <li><a href="#Proyectos" >Proyectos</a></li>
                <li><a href="#Tecnologias" >Tecnologias</a></li>
                <li><a href="#Contacto" >Contactame</a></li>
            </ul>
        </nav>
    )   
};
export default Navbar;

