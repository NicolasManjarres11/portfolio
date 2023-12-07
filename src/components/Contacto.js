import { faFacebook, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAt, faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

const Contacto = () => {

    const emailRef = useRef(null);
    const [copy, setCopy] = useState('Copiar Email');


    const copyEmail = () => {
      if (emailRef.current) {
        const emailToCopy = emailRef.current.value;
        navigator.clipboard.writeText(emailToCopy)
          .then(() => setCopy('Copiado'))
          .catch(() => setCopy('Error al copiar el email'));
      }
    }


  return (
    <div id='contacto' className='bg-black py-16 md:px-[200px] px-16 md:flex md:flex-col grid'>
      <div className='flex mb-10 items-center text-center justify-center'>
        <h1 className='text-white font-abril font-bold text-4xl '>
          Contáctame
        </h1>
      </div>
      <div className='lg:flex justify-between w-auto gap-10'>
        <div className='flex flex-col w-full items-center gap-4 mb-8'>
          <h1 className='text-white font-ubuntu font-bold text-2xl mb-2'>
            Correo electrónico <span>
              <FontAwesomeIcon icon={faEnvelope} className='ml-2 h-7'/>
            </span>
          </h1>
          <div className='flex gap-2 mb-4'>
            <input type='text' disabled className='bg-[#a7a5a5] w-auto py-1.5 px-3 rounded-lg grid place-items-center text-slate-700' value="nicolasmanjarresg@gmail.com" ref={emailRef}/>
            <div className='flex '>
              <div className='relative group/tooltip'>
                <button className='flex bg-indigo-500 hover:bg-opacity-90 text-indigo-100 py-2.5 px-4 rounded-lg' onClick={copyEmail}>
                  <FontAwesomeIcon icon={faCopy} className='text-lg'/>
                </button>
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap  bg-white text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  {copy}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full items-center gap-4'>
          <h1 className='text-white font-ubuntu font-bold text-2xl mb-2'>
            Redes sociales <span>
              <FontAwesomeIcon icon={faAt} className='ml-2 h-7 text-indigo-500'/>
            </span>
          </h1>
          <div className="social-icons flex gap-2" id="socialmedia">
          <a
            href="https://github.com/NicolasManjarres11"
            className="github"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="h-7 w-7  rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white p-1 bg-black text-white " />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-manjarres-gonzalez-8b6753212/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7  rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white p-1 bg-black text-white " />
          </a>
          <a href="/" className="facebook">
            <FontAwesomeIcon icon={faFacebook} className="h-7 w-7  rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white p-1 bg-black text-white " />
          </a>
          <a href="/" className="x">
            <FontAwesomeIcon icon={faXTwitter} className="h-7 w-7  rounded-lg transition duration-300 hover:bg-indigo-500 hover:text-white p-1 bg-black text-white " />
          </a>
        </div>
        </div>
      </div>

    </div>

    
  )
}

export default Contacto