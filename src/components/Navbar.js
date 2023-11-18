import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (


    <nav className="navbar flex flex-wrap justify-between items-center p-1.5 font-ubuntu bg-maincolor text-white">
      <div className=" logo flex items-center flex-no-shrink text-white mr-6 mx-10">

        <span className="font-semibold text-xl tracking-widest">Manjarres</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light" id="boton" onClick={() => {
          const boton = document.querySelector('#boton')
          const menu = document.querySelector('#menu')

          menu.classList.toggle('hidden')


        }}>
          <FontAwesomeIcon icon={faBars} className=" " />
        </button>
      </div>
      <div className="navbar-section w-full  flex-grow lg:flex  lg:items-center lg:w-auto text-center hidden" id="menu">
        <div className="lg:flex-grow">
          <a href="/" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter ">
            Home
          </a>
          <a href="/" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter">
            About
          </a>
          <a href="/" className="block m-1 p-2 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:inline-block lg:mt-0 text-teal-lighter">
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