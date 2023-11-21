import React from 'react'
import imageLogo from '../assets/img/logo2.png'

const Home = () => {
  return (

    /*<section id='home' className='flex items-center lg:h-[85vh] py-32 lg:py0 '>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start font-ubuntu font-semibold'>
            <p className='text-lg mb-[22px]'>
              Hey, I'm Nicolas :D
            </p>
            <h1 className=''>
              I Build & Design <br /> Web Interfaces
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={imageLogo} alt='logo'/>
          </div>
        </div>
      </div>
    </section>*/

    <div className="flex flex-wrap items-center justify-between p-8 mt-8 mx-10 ">
      {/* Columna de la izquierda - Descripción */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-4">
        <p className='flex items-center justify-start mt-6 mb-4 font-bold'>Hola, soy Nicolas Manjarres 👋</p>
        <h1 className='text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] justify-start'>
          Analyst and web <br /> developer
        </h1>
        <p className="text-lg font-semibold font-barlow mt-6 mb-10 justify-center">
          Apasionado desarrollador web con experiencia en [tecnologías]. Estoy comprometido con la creación de soluciones innovadoras y centradas en el usuario.
        </p>
        <div className='flex'>
          <button className="bg-teal-lighter text-teal-darker  py-2 px-4 rounded-full bg-maincolor text-white border border-black border-width-5 hover:bg-white hover:text-black transition duration-300 font-ubuntu">
            Ver más
          </button>
        </div>

      </div>

      {/* Columna de la derecha - Imagen y botón "Ver más" */}
      <div className="hidden lg:flex flex-1 justify-end items-end h-full mx-auto">
        <img
          src={imageLogo}
          alt="Tu Imagen"
          className="rounded-full w-48 h-48 mx-auto mb-4 lg:mb-0"
        />

      </div>
    </div>


  )
}

export default Home