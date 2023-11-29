import React from 'react'
import { projects } from './Data'
import bgImg from '../assets/img/bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

const Proyectos = () => {
  return (
    <div id='proyectos' className='flex flex-col gap-10 bg-[#302129] px-[40px] '>
      <div className='flex flex-col gap-10 mx-auto lg:mx-[150px] my-[100px]'>
        {projects.map((project, index) => {
          return (
            <div className='grid gap-9  lg:grid-cols-2' key={index}>
              <a href={project.live} target='_blank' rel='noreferrer'>
                <div className='rounded-xl overflow-hidden flex'>
                  <span className='box-border inline-block overflow-hidden w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 relative max-w-full mx-auto'>
                    <span className='box-border w-initial h-initial bg-none opacity-100 border-0 m- p-0 max-w-full md:justify-center'>
                      <img className='block max-w-full w-initial h-initial bg-none opacity-100 border-0 m-0 p-0' alt='' aria-hidden="true" src={bgImg} />
                    </span>
                    <img src={project.image} className='rounded-lg duration-500 transition-all translate-x-9 translate-y-9 hover:translate-x-4 hover:translate-y-4 absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto' alt=''
                      decoding='async'
                      data-nimg='intrinsic' />
                  </span>
                </div>
              </a>
              <div className='flex flex-col gap-4 items-left px-6  mx-auto'>
                <h2 className='text-[#6249c7] font-bold font-barlow text-3xl text-center lg:text-left'>
                {project.tittle}
                </h2>
                <p className='text-white font-barlow'>
                  {project.description}
                </p>
                <div className='flex justify-start gap-3'>
                  <a href={project.code} target='_blank' rel='noreferrer' className='px-4 py-2 bg-[#6249c7] text-white rounded-lg hover:text-black hover:bg-white transition duration-300 cursor-pointer'>
                    Code
                    <span className='ml-1'>
                      <FontAwesomeIcon icon={faCode}/>
                    </span>
                  </a>
                  <a href={project.live} target='_blank' rel='noreferrer' className='px-4 py-2 bg-[#6249c7] text-white rounded-lg hover:text-black hover:bg-white transition duration-300 cursor-pointer'>
                    Link
                    <span className='ml-1'>
                      <FontAwesomeIcon icon={faLink}/>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Proyectos