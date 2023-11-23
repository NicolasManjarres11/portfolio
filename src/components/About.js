import React from 'react'
import imageDev from '../assets/img/developer.webp'


const About = () => {
  return (
    /* <div className='container  bg-maincolor'>
      <div className='hidden lg:flex flex-1 justify-start items-start h-full mx-10'>
        <img
          src={imageDev}
          alt='dev'
          className=' w-48 h-48 mx-auto mb-4 lg:mb-0'
        />
      </div>
      <div>
        <h1 className='text-white font-bold'>Nicolas Manjarres</h1>
        <h2 className='text-red-600'>Web developer</h2>
        <p className='text-[#E4DDEB]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div> */

    /*<div className='section bg-maincolor'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl_flex-row gap-24'>
          <img src={imageDev}
            alt='dev'
            className='object-cover h-auto l w-[400px] md:mx-auto lg:mx-0 rounded-2xl'/>
        </div>
      </div>
    </div>*/

    <div id="about" className="bg-[#1F161B] py-16 px-16 flex  items-center justify-between ">
      <div className="flex justify-center items-center lg:mx-[100px]">


        <div className="lg:block hidden m-10 flex-1 h-full mx-auto">
          <h1 className='flex text-white font-abril font-bold text-5xl ml-10 mb-10' >
            About<span className='text-[#6249c7] text-5xl px-1'>.</span>
          </h1>
          <img
            src={imageDev}
            alt="Nicolas Manjarres"
            className=" mx-auto md:mx-0 md:w-full md:h-full lg:w-[450px] lg:h-[350px]"
          />
        </div>


        <div className="w-full md:w-1/2 md:pl-8 items-center lg:justify-end">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center text-center text-white font-ubuntu lg:text-left lg:px-10">Nicolas Manjarres</h2>
          <h3 className="text-xl font-semibold mb-2 text-[#6249c7] font-barlow items-center justify-center text-center lg:text-left px-10">Web Developer</h3>
          <div className="lg:hidden m-10 flex-1 justify-end items-end h-full mx-auto">
            <img
              src={imageDev}
              alt="Tu Imagen"
              className=" w-48 h-48 mx-auto mb-4 lg:mb-0"
            />

          </div>
          <p className="text-[#F9F9F9] text-xl font-barlow text-left items-center mx-auto lg:px-10 mb-10">
            Soy un apasionado desarrollador web especializado en JavaScript con Node.js y tecnologías relacionadas. Mi enfoque se centra en crear soluciones innovadoras y eficientes para proporcionar experiencias web excepcionales.
          </p>
          <div className='flex items-center justify-center'>
            <button className='flex  bg-[#6249c7] rounded-full border-black py-2 px-4 text-white font-ubuntu hover:bg-white hover:text-black lg:mr-[60px] transition duration-500'>
              Contact Me
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About