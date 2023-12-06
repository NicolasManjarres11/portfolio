import { faCopy } from '@fortawesome/free-solid-svg-icons'
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
            Correo electrónico
          </h1>
          <div className='flex gap-2 mb-4'>
            <input type='text' disabled className='bg-[#a7a5a5] w-auto py-1.5 px-3 rounded-lg grid place-items-center text-slate-700' value="nicolasmanjarresg@gmail.com"/>
            <div className='flex '>
              <div className='relative group/tooltip'>
                <button className='flex bg-indigo-500 hover:bg-opacity-90 text-indigo-100 py-2.5 px-4 rounded-lg'>
                  <FontAwesomeIcon icon={faCopy} className='text-lg'/>
                </button>
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