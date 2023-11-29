import About from './components/About';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';
import Skills from './components/Skills';

function App() {


  return (
    <div className='' >
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Proyectos/>
      
      <Servicios/>
      <Contacto/>
      <div style={{height: '1000px'}}></div>
    </div> 
  );
}

export default App;
