import { faBriefcase, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { estudios } from './Data'
import { exp } from './Data'
import React from 'react'

const Perfil = () => {
    return (
        /* <div id="perfil" className="bg-[#1F161B] py-16 px-16 flex flex-col items-center justify-between">
            <div className="flex flex-col justify-center items-center lg:mx-[100px] gap-8">
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
                                    <p className='text-white font-ubuntu'>
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
                                <div id='estudios' className='flex flex-col mb-10 gap-2'>
                                    <h3 className='text-white font-bold text-xl font-ubuntu'>
                                        {estudio.titulo}
                                    </h3>
                                    <h4 className='text-white '>
                                        {estudio.instituto}
                                    </h4>
                                    <h4 className=' text-[#a994fd]'>
                                        {estudio.fecha}
                                    </h4>
                                </div>)
                        })}
                    </div>
                    
                </div>
            </div>
        </div> */

        <div id="perfil" className="bg-[#1F161B] py-16 px-16 flex flex-col items-center justify-between">
            <div className="flex flex-col justify-center items-center lg:mx-[100px]">
                <h1 className='flex text-white font-abril font-bold text-5xl ml-10 mb-10' >
                    Perfil<span className='text-[#6249c7] text-5xl px-1'>.</span>
                    <FontAwesomeIcon icon={faBriefcase} className='ml-2' />
                </h1>
                <div className='grid mb-8'>
                    <h2 className='text-white font-bold font-barlow text-3xl justify-start mb-10'>
                        Experiencia
                    </h2>
                    <div className='grid gap-9 lg:grid-cols-2'>
                        {exp.map((ex, index) => {
                            return (
                                <div id='experiencia' className='flex flex-col gap-4' key={index}>
                                    <h3 className='text-white font-bold text-xl font-ubuntu'>
                                        {ex.cargo}
                                        <FontAwesomeIcon icon={faCircle} className='mx-4 md:text-xl text-[#a994fd]' />
                                        <span className='text-white'>
                                            {ex.fecha}
                                        </span>
                                    </h3>
                                    <h4 className='text-[#a994fd] font-abril'>
                                        {ex.empresa}
                                    </h4>
                                    <p className='text-white font-ubuntu text-left'>
                                        {ex.description}
                                    </p>

                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className='grid'>
                    <h2 className='text-white font-bold font-barlow text-3xl justify-start mb-10'>
                        Educación
                    </h2>
                    <div className='grid gap-9 md:grid-cols-2'>
                        {estudios.map((estudio, index) => {
                            return (
                                <div id='estudios' className='flex flex-col gap-2' key={index}>
                                    <h3 className='text-white font-bold text-xl font-ubuntu'>
                                        {estudio.titulo}
                                    </h3>
                                    <h4 className='text-white font-ubuntu'>
                                        {estudio.instituto}
                                    </h4>
                                    <h4 className='text-[#a994fd] font-ubuntu'>
                                        {estudio.fecha}
                                    </h4>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Perfil