import React from 'react'
import imageLogo from '../assets/img/logo2.webp'

const Home = () => {
  return (


    <div className="flex flex-wrap items-center justify-between p-8 lg:p-[100px] mt-[40px] mx-auto lg:mx-[100px]"  id='home'>
      {/* Columna de la izquierda - Descripción */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-4">
        <p className='flex items-center justify-center lg:justify-start mt-4 mb-4 font-bold'>Hola, soy Nicolas Manjarres 👋</p>
        <div className="lg:hidden m-10 flex-1 justify-end items-end h-full mx-auto">
        <img
          src={imageLogo}
          alt="Tu Imagen"
          className="rounded-full w-48 h-48 mx-auto mb-4 lg:mb-0"
        />

      </div>
        <h1 className='text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] justify-center items-center text-center lg:justify-start lg:text-left'>
          Analyst and web <br /> developer
        </h1>
        <p className="text-lg font-semibold font-barlow mt-6 mb-10 justify-center lg:text-left">
          Apasionado desarrollador web con experiencia en [tecnologías]. Estoy comprometido con la creación de soluciones innovadoras y centradas en el usuario.
        </p>
        <div className='flex items-center justify-center text-center lg:justify-start'>
          <button className="bg-teal-lighter text-teal-darker  py-2 px-4 rounded-full bg-maincolor text-white border border-black border-width-5 hover:bg-white hover:text-black transition duration-300 font-ubuntu ">
            Ver más
          </button>
        </div>

      </div>

      {/* Columna de la derecha - Imagen y botón "Ver más" */}
      <div className="hidden lg:flex flex-1 justify-end items-end h-full mx-auto">
        <img
          src={imageLogo}
          alt="Tu Imagen"
          className="rounded-full w-[320px] h-[320px] mx-auto mb-4 lg:mb-0"
        />

      </div>
    </div>


  )
}

export default Home