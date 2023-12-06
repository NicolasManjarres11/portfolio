import { faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contacto = () => {
  return (
    <div className='bg-black py-16 md:px-[200px] px-16 md:flex md:flex-col grid'>
      <div className='flex mb-10 items-center text-center justify-center'>
        <h1 className='text-white font-abril font-bold text-5xl '>
          Contáctame
        </h1>
      </div>
      <div className='md:flex gap-10 justify-between w-auto '>
        <div className='flex flex-col w-full items-center gap-4'>
          <h1 className='text-white font-ubuntu font-bold text-2xl mb-2'>
            Correo electrónico <span>
              <FontAwesomeIcon icon={faEnvelope} className='ml-2 h-8'/>
            </span>
          </h1>
          <div className='flex gap-2 mb-4'>
            <input type='text' disabled className='bg-[#a7a5a5] w-auto py-1.5 px-3 rounded-lg grid place-items-center text-slate-700' value="nicolasmanjarresg@gmail.com"/>
            <div className='flex '>
              <div className='relative group/tooltip'>
                <button className='flex bg-indigo-500 hover:bg-opacity-90 text-indigo-100 py-2.5 px-4 rounded-lg'>
                  <FontAwesomeIcon icon={faCopy} className='text-lg'/>
                </button>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap  bg-white text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Copiar email
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-white font-ubuntu font-bold text-2xl'>
            Redes sociales
          </h1>
          <div className='flex gap-2 mb-4'>

          </div>
        </div>
      </div>

    </div>

    
  )
}

export default Contacto