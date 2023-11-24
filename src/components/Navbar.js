import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


const Navbar = () => {

  const menuHidden = () => {
    const menu = document.querySelector('#menu')

    menu.classList.toggle('hidden')
  }

  useEffect(() => {
    const closeMenu = (e) => {
      const menu = document.querySelector('#menu');
      const button = document.querySelector('#boton');

      // Verificar si el clic no está dentro del menú ni en el botón
      if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.add('hidden');
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      // Limpieza del event listener al desmontar el componente
      document.removeEventListener('click', closeMenu);
    };
  }, []);


  return (


    <nav className="navbar fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center p-1.5 font-ubuntu bg-maincolor text-white">
      <div className=" logo flex items-center flex-no-shrink text-white mr-6 mx-10">

        <span className="font-semibold text-xl tracking-widest">Manjarres</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light mr-1" id="boton" onClick={() => {
          const menu = document.querySelector('#menu')

          menu.classList.toggle('hidden')


        }}>
          <FontAwesomeIcon icon={faBars} className=" " />
        </button>
      </div>
      <div className="navbar-section w-full  flex-grow lg:flex  lg:items-center lg:w-auto text-center hidden transition duration-300 ease-in-out" id="menu">
        <div className="lg:flex-grow">
          <a href="#home" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter" 
          onClick={menuHidden}
          spy="true">
            Home
          </a>
          <a href="#about" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter"
          onClick={menuHidden}
          spy="true">
            About
          </a>
          <a href="#proyectos" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter"
          onClick={menuHidden}
          spy="true">
            Proyectos
          </a>
          <a href="/" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter">
            Servicios
          </a>
          <a href="/" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter">
            Contáctame
          </a>
        </div>
        <div className="social-icons" id="socialmedia">
          <a
            href="https://github.com/NicolasManjarres11"
            className="github"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6  rounded-navButton transition duration-300 hover:bg-white hover:text-black p-1  " />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-manjarres-gonzalez-8b6753212/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6  rounded-navButton transition duration-300 hover:bg-white hover:text-black p-1 " />
          </a>
          <a href="/" className="facebook">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6  rounded-navButton transition duration-300 hover:bg-white hover:text-black p-1 " />
          </a>
          <a href="/" className="x">
            <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6  rounded-navButton transition duration-300 hover:bg-white hover:text-black p-1 " />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar