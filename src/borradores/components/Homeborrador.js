import React from 'react'

const Homeborrador = () => {
  return (
    <div className="flex flex-wrap items-center justify-between p-8">
      {/* Columna de la izquierda - Descripción */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-4">
        <p className="text-lg font-light">
          Soy [Tu Nombre], un apasionado desarrollador web con experiencia en [tecnologías]. Estoy comprometido con la creación de soluciones innovadoras y centradas en el usuario.
        </p>
      </div>

      {/* Columna de la derecha - Imagen y botón "Ver más" */}
      <div className="w-full lg:w-1/2">
        <img
          src={imageLogo}
          alt="Tu Imagen"
          className="rounded-full w-48 h-48 mx-auto mb-4 lg:mb-0"
        />
        <button className="bg-teal-lighter text-teal-darker py-2 px-4 rounded-full">
          Ver más
        </button>
      </div>
    </div>
  )
}

export default Homeborrador