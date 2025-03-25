import './App.css'
import Home from './components/Home'
import Navbar from './components/navbar'	
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Tecnologias from './components/Tecnologias'

function App() {

  return (  
    <>
      <Navbar></Navbar>
      <Home></Home>
      <SobreMi></SobreMi>
      <Proyectos></Proyectos>
      <Tecnologias></Tecnologias>
      <Contacto></Contacto>
    </>
  )
}

export default App
