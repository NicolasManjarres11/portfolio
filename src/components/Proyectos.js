import React from 'react'
import {projects} from './Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

const Proyectos = () => {
  return (
    <div id="proyectos" className='flex flex-col items-center gap-10 bg-[#302129] py-6 lg:py-12 lg:px-[150px] px-10'>
      <div className='grid gap-10 items-center w-[600px]'>
          <div className='items-center justify-center'>
              <h1 className='text-center text-white p-6 font-abril text-4xl'>Proyectos</h1>
              <div>
                {projects.map((project, index) => {
                  return (
                    <div className='grid gap-4 grid-cols-2 group mb-10' key={index}>
                      <div className=''>
                          <img src={project.image} alt='' className='h-[200px] w-auto justify-center px-4 mr-4 left-8'/>
                      </div>
                      <div>
                        <h2 className='font-ubunt font-bold text-2xl text-[#6249c7] mb-1 '>{project.tittle}</h2>
                        <p className='text-white font-barlow my-5'>{project.description}</p>
                        <div className='flex'>
                        <a href={project.code} className='flex bg-[#6249c7] text-white font-ubuntu p-1.5 rounded-lg border-black hover:text-black hover:bg-white transition duration-300 mr-2'
                        target="_blank"
                        rel="noopener noreferrer">
                          Code
                          <span className='ml-1' >
                            <FontAwesomeIcon icon={faCode} />
                          </span>
                        </a >
                        <a href={project.live} className='flex bg-[#6249c7] text-white font-ubuntu p-1.5 rounded-lg border-black hover:text-black hover:bg-white transition duration-300'
                        target="_blank"
                        rel="noopener noreferrer">
                          Live
                          <span className='ml-1' >
                            <FontAwesomeIcon icon={faLink} />
                          </span>
                        </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
      </div>
    </div>
  )
}

export default Proyectos