import React from 'react'
import {projects} from '../../components/'
import bgImg from '../assets/img/bg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

const Proyectos2 = () => {
  return (
    /* <div id="proyectos" className='flex flex-col items-center gap-10 bg-[#302129] py-6 lg:py-12 lg:px-[150px] px-10'>
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
    </div> */

    <div id="proyectos" className='flex flex-col gap-10 bg-[#302129] py-12'>
      <div className='grid gap-10 mx-[100px] my-12'>

        
          {projects.map((project, index) => {
            return (
              <article className='grid gap-4 sm:gap-7 md:grid-cols-2 group '>
              <a href={project.live} target='_blank' rel='noreferrer' className='block'>
                <div className='relative rounded-xl overflow-hidden flex bg-gray-700/50'>
                  <span className="box-border inline-block overflow-hidden w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 relative max-w-full">
                    <span className='box-border block w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 max-w-full'>
                      <img className='block max-w-full w-initial h-initial bg-none opacity-100 border-0 m-0 p-0' alt='' aria-hidden="true" src={bgImg}/>
                    </span>
                    <img src={project.image} decoding='async' data-nimg="intrinsic" className='rounded-lg duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7 absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full' alt=''/>
                  </span>
                </div>
              </a>
              <div className='flex flex-col gap 2.5 items-left py-5 justify-between p-[80px]'>
                <h3 className='font-bold font-ubuntu text-3xl text-[#6249c7] justify-start mb-5'>
                {project.tittle}
                </h3>
                <p className='text-white font-barlow'>
                  {project.description}
                </p>
                <div className='flex justify-start gap-3 '>
                <a href={project.code} target='_blank' rel='noreferrer' className='text-lg px-4 py-2 bg-[#6249c7] text-white  font-bold rounded-lg hover:text-black hover:bg-white transition duration-300 cursor-pointer'>
                  Code
                  <span className='ml-1' >
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                </a>
                <a href={project.code} target='_blank' rel='noreferrer' className='text-lg px-4 py-2 bg-[#6249c7] text-white  font-bold rounded-lg hover:text-black hover:bg-white transition duration-300 cursor-pointer'>
                  Live
                  <span className='ml-1' >
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                </a>
              </div>
              </div>
              <div>

              </div>
              
              </article>
            )
          })}
        
      </div>
    </div>
  )
}

export default Proyectos2