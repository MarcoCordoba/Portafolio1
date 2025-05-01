import './App.css'
import Home from './components/Home'
import Navbar from './components/navbar/Navbar'	
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Tecnologias from './components/Tecnologias'
import Footer from './components/footer/Footer'

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
