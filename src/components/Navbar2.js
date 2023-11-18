import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar2 = () => {
    return (
        <nav className="navbar flex flex-wrap justify-between items-center p-4 font-ubuntu bg-maincolor text-white">
      <div className="logo flex items-center flex-shrink-0  font-ubuntu">
        <img src="" alt="logo"/>
        <span className="">NICOLAS MANJARRES</span>
      </div>

      <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light" id="boton">
                    <FontAwesomeIcon icon={faBars} className=" "/>
                </button>
            </div>

      <div className="secciones navbar-section lg:flex-grow" id="menu">
        <a href="/" className="flex m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300 lg:mt-0 lg:inline-block">Home</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">About</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Proyectos</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Servicios</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Contáctame</a>
      </div>

      <div className="social-icons" id="socialmedia">
        <a 
          href="https://github.com/NicolasManjarres11" 
          className="github"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6 m-1.5 "/>
        </a>
        <a 
          href="https://www.linkedin.com/in/nicolas-manjarres-gonzalez-8b6753212/" 
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          >
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 m-1.5"/>
        </a>
        <a href="/" className="facebook">
          <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 m-1.5"/>
        </a>
        <a href="/" className="x">
          <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6 m-1.5"/>
        </a>

      </div>

      {/* <div className="hmbr block lg:hidden">
        <button className="flex items-center" id="boton" onClick={() => {
            const boton = document.querySelector('#boton')
            const menu = document.querySelector('#menu')
            
            menu.classList.toggle('hidden')
            
        }}>
          <FontAwesomeIcon icon={faBars} className=" "/>
        </button>

      </div> */}
    </nav>
    )
}

export default Navbar2
