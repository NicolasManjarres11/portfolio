import { faBriefcase, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { estudios } from './Data'
import { exp } from './Data'
import React from 'react'

const Perfil = () => {
    return (
        <div id="perfil" className="bg-[#1F161B] py-16 px-16 flex flex-col items-center justify-between">
            <div className="flex flex-col justify-center items-center lg:mx-[100px]">
                <h1 className='flex text-white font-abril font-bold text-5xl ml-10 mb-10' >
                    Perfil<span className='text-[#6249c7] text-5xl px-1'>.</span>
                    <FontAwesomeIcon icon={faBriefcase} className='ml-2' />
                </h1>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 gap-12'>

                    <div className='md:w-1/2'>
                    <h2 className='text-white font-bold font-barlow text-3xl justify-start mb-10'>
                        Experiencia
                    </h2>
                    {exp.map((ex, index) => {
                            return (
                                <div id='experiencia' className='flex flex-col gap-2 mb-10' key={index}>
                                    <h2 className='text-white font-bold text-xl font-ubuntu'>
                                        {ex.cargo}
                                        <FontAwesomeIcon icon={faCircle} className='mx-4 text-[#a994fd]' />
                                        <span className='text-white'>
                                            {ex.fecha}
                                        </span>
                                    </h2>
                                    <h3 className='text-[#a994fd] font-abril'>
                                        {ex.empresa}
                                    </h3>
                                    <p className='text-white'>
                                        {ex.description}
                                    </p>

                                </div>
                            )
                        })}
                    </div>

                    <div className='md:w-1/2'>
                        <h2 className='text-white font-bold font-barlow text-3xl justify-start mb-10'>
                            Estudios
                        </h2>
                        {estudios.map((estudio, index) => {
                            return (
                                <div id='estudios' className='flex flex-col mb-10'>
                                    <h3 className='text-white'>
                                        {estudio.titulo}
                                    </h3>
                                    <h4 className='text-white'>
                                        {estudio.instituto}
                                    </h4>
                                    <h4 className='text-white'>
                                        {estudio.instituto}
                                    </h4>
                                </div>)
                        })}
                    </div>
                    
                </div>
            </div>
        </div> 

        /* <div className="bg-[#1F161B] py-16 px-16 items-center">
            <div className='items-center justify-center text-center'>
                <h1 className='flex text-white font-abril text-center items-center font-bold text-5xl ml-10 mb-10' >
                        Perfil<span className='text-[#6249c7] text-5xl px-1'>.</span>
                        <FontAwesomeIcon icon={faBriefcase} className='ml-2' />
                </h1>
            </div>
            

            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                
                <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2">Título Izquierda</h2>
                    <h3 className="text-md font-medium mb-2">Subtítulo Izquierda</h3>
                    <p className="text-gray-700 mb-4">
                        Contenido de la columna izquierda.
                    </p>
                </div>

            
                <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2">Título Derecha</h2>
                    <h3 className="text-md font-medium mb-2">Subtítulo Derecha</h3>
                    <p className="text-gray-700 mb-4">
                        Contenido de la columna derecha.
                    </p>
                </div>
            </div>
        </div> */

    )
}

export default Perfil