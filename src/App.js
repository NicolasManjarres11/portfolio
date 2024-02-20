import About from './components/About';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import React from 'react'

function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Home />
      <About/>
      <Perfil/>
      <Skills/>
      <Proyectos/>
      <Contacto/>
    </div> 
  );
}

export default App;
