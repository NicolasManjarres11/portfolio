import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileView = window.innerWidth <= 1024

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


    <nav className="navbar fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center p-1.5 font-ubuntu bg-maincolor text-white ">
      <div className=" logo flex items-center flex-no-shrink text-white mr-6 mx-10">

        <span className="font-semibold text-xl tracking-widest">Manjarres</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light mr-1" id="boton" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} className=" " />
        </button>
      </div>
      <div className={`navbar-section w-full flex-grow lg:flex lg:items-center lg:w-auto text-center transition-max-height duration-300 ease-in-out ${mobileView ? (isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0') : ''
        }`}
        id="menu">
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
          <a href="#perfil" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter"
            onClick={menuHidden}
            spy="true">
            Perfil
          </a>
          <a href="#proyectos" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter"
            onClick={menuHidden}
            spy="true">
            Proyectos
          </a>
          <a href="#contacto" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter"
            onClick={menuHidden}
            spy="true">
            Contáctame
          </a>
        </div>
        <div className="social-icons flex justify-center lg:mt-1 mt-10" id="socialmedia">
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
          <a href="https://wa.me/+573192842215"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6  rounded-navButton transition duration-300 hover:bg-white hover:text-black p-1 " />
          </a>
          <div className="">
            <div className="relative group/tooltip ">
              <a href="./CV Nicolas Manjarres.pdf" download className="">
                <FontAwesomeIcon icon={faFilePdf} className="h-6 w-6  rounded-navButton transition duration-300 hover:bg-white hover:text-black p-1 z-10" />
              </a>
              <span className="grid absolute pointer-events-none  transition-all opacity-0 z-50 top-full translate-y-2 py-1 px-1.5 text-xs left-15 -translate-x-1/2 rounded-md whitespace-nowrap bg-white text-gray-700 before:content-[''] before:absolute before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:top-0 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0">
                Descargar <span>
                  CV
                </span> 
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar