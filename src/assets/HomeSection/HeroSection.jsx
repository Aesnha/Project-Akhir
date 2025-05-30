import React from 'react'

export default function HeroSection() {
  return (
   <section className='w-full min-h-screen bg-[#192338]'>
        <div className='flex items-center justify-center h-screen'>
           <div className='flex flex-col md:flex-row rounded-ss-full items-center h-1/2 bg-[#1E2E4F] shadow-lg shadow-[#31487A] '>
            <h1 className='p-4 font-montserrat text-2xl md:text-3xl lg:text-6xl text-center text-[#D9E1F1]  text-shadow-lg text-shadow-[#8FB3E2]'>
            COOL.In
            </h1>
            <div className='w-1/2'>
           
            <p className=' p-6 text-xl font-montserrat md:text-1xl text-[#D9E1F1]'>
          Hidup sudah cukup panas jadi biarkan minumanmu tetap dingin. Dapatkan tumbler COOL.IN
            </p>
           
            </div>
           </div>
           <div className='w-1/2 flex md:flex-col p-10 shadow-lg items-center justify-center shadow-[#8FB3E2] gap-3'> 
            <img src="CWT.png" alt="" className='rounded-full'
             width={300}
                height={300} 
            />
             <button className=' md:text-1xl sm:flex-col text-center p-3 rounded-full py-3 border-white  bg-amber-50 hover:bg-[#31487A] shadow-grey-700'>
                 <a href="/product">Order Now!</a>
            </button>
           </div>
        </div>
    </section>
  )
}
