import React from 'react'
import {projects} from './Data'

const Proyectos = () => {
  return (
    <div  className='bg-[#302129] py-6 lg:py-12 lg:px-[150px] px-10'>
      <div className='container mx-auto'>
          <div className='items-center justify-center'>
              <h1 className='text-center text-white p-6'>Proyectos</h1>
              <div>
                {projects.map((project, index) => {
                  return (
                    <div className='flex justify-center'>
                      <div>
                          <img src={project.image} alt='' className='h-[200px] w-[200px] mr-12'/>
                      </div>
                      <div>
                        <h2>{project.tittle}</h2>
                        <p>{project.description}</p>
                        <a href={project.code}>Code</a>
                        <a href={project.live}>Live</a>
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