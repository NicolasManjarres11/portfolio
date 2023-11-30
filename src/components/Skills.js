import React from 'react'
import { skills } from './Data'

const Skills = () => {
  return (
    <div className='bg-[#552041] py-6 lg:py-12 lg:px-[150px] px-10'>
      <div className='container mx-auto'>
        <div className='flex  md:grid-flow-row items-center justify-center'>
          {skills.map((skill, index) => {
            return (
            <div className='flex items-center justify-center lg:h-[80px] lg:w-[80px]' key={index}>
              <img src={skill.image} alt='' />
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills