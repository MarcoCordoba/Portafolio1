import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'	
import SobreMi from './pages/sobreMi/SobreMi'
import Proyectos from './pages/proyectos/Proyectos'
import Contacto from './pages/contacto/Contacto'
import Tecnologias from './pages/tecnologias/Tecnologias'
import Footer from './components/footer/Footer'
import '@fontsource-variable/rubik';

function App() {

  return (  
    <>
      <Navbar></Navbar>
      <Home></Home>
      <SobreMi></SobreMi>
      <Proyectos></Proyectos>
      <Tecnologias></Tecnologias>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default App
