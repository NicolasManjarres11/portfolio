import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 font-ubuntu bg-maincolor text-white">
      <div className="logo font-ubuntu">
        NICOLAS MANJARRES
      </div>

      <div className="navbar-section m-1rem">
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Home</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">About</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Proyectos</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Servicios</a>
        <a href="/" className="m-1 p-4 rounded-navButton hover:border-white hover:bg-white hover:text-black transition duration-300">Contáctame</a>
      </div>

      <div className="social-icons">
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
    </nav>
  )
}

export default Navbar