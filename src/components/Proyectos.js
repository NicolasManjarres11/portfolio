import React from 'react'
import {projects} from './Data'
import bgImg from '../assets/img/bg.jpg'
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
                    <span className='box-border border-bl'>
                      <span>
                          <img/>
                      </span>
                      <img src={project.image} className='rounded-lg duration-500 transition-all  hover:translate-x-7 hover:translate-y-7'  alt=''/>
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