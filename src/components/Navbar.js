import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4">
      <div className="logo bg-pruebafinal font-ubuntu">
        NICOLAS MANJARRES
      </div>

      <div className="navbar-section m-1rem">
        <a href="/" className="m-2">About</a>
        <a href="/" className="m-2">Proyectos</a>
        <a href="/" className="m-2">Contáctame</a>
      </div>

      <div className="social-icons">
        <a href="/" className="github">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5 m-1 "/>
          <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 m-1 "/>
          <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 m-1 "/>
          <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 m-1 "/>

        </a>
      </div>
    </nav>
  )
}

export default Navbar