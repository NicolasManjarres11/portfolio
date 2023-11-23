import { Element } from 'react-scroll';
import About from './components/About';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios';

function App() {


  return (
    <div className=''>
      <Navbar />
      <Home />
      <Element name="about">
        <About />
      </Element>
      <Proyectos/>
      <Servicios/>
      <Contacto/>
    </div> 
  );
}

export default App;
