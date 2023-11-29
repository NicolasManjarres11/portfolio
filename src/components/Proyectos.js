import React from 'react'
import {projects} from './Data'
import bgImg from '../assets/img/bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

const Proyectos = () => {
  return (
    <div id='proyectos' className='flex flex-col gap-10 bg-[#302129] px-[40px] '>
      <div className='flex flex-col gap-10 mx-auto lg:mx-[150px] my-[100px]'>
        {projects.map((project, index)=> {
          return (
            <div className='grid gap-9  lg:grid-cols-2' key={index}>
                <a href={project.live} target='_blank' rel='noreferrer'>
                  <div className='rounded-xl overflow-hidden flex'>
                    <span className='box-border inline-block overflow-hidden w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 relative max-w-full'>
                      <span className='box-border w-initial h-initial bg-none opacity-100 border-0 m- p-0 max-w-full'>
                          <img className='block max-w-full w-initial h-initial bg-none opacity-100 border-0 m-0 p-0' alt='' aria-hidden="true" src={bgImg}/>
                      </span>
                      <img src={project.image} className='rounded-lg duration-500 transition-all translate-x-9 translate-y-9 hover:translate-x-4 hover:translate-y-4 absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-none m-auto'  alt=''
                      decoding='async'
                      data-nimg='intrinsic'/>
                    </span>
                    
                  </div>
                  
                </a>
              
              <h2 className='text-white text-4xl text-center lg:text-left'>
                {project.tittle}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Proyectos