import React from 'react'

const Contacto = () => {
  return (
    <div className='bg-black py-16 px-16 flex flex-col items-center justify-between'>
      <div className='flex mb-10'>
        <h1 className='text-white font-abril font-bold text-5xl'>
          Contáctame
        </h1>
      </div>
      <div className='flex gap-[600px] justify-center w-full mx-auto'>
        <div className='grid w-full'>
          <h1 className='text-white font-ubuntu font-bold text-2xl'>
            Correo
          </h1>
          <div className='flex gap-0'>
            <input type='text' disabled className='bg-white w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600' value="nicolasmanjarresg@gmail.com"/>
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-white font-ubuntu font-bold text-2xl'>
            redes
          </h1>
        </div>
      </div>
    </div>

    
  )
}

export default Contacto