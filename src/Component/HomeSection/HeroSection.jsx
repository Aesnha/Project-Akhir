import React from 'react'

export default function HeroSection() {
  return (
   <section className='w-full min-h-screen bg-gradient-to-br from-amber-800 to-amber-200 '>
        <div className='flex items-center justify-center h-screen'>
           <div className='flex flex-col md:flex-row rounded-ss-full items-center h-1/2 bg-amber-600 shadow-lg shadow-amber-300'>
            <div className='w-1/2'>
            <h1 className='p-4 text-2xl md:text-3xl lg:text-6xl text-center'>
            AROMA SRIWIJAYA
            </h1>
            <p className='p-6 text-l md:text-1xl'>
            Dari biji kopi pilihan yang dirawat dengan sepenuh hati
            </p>
            <button className='p-4 items-center px-6 py-3 border-white  bg-amber-50 hover:bg-amber-800 shadow-grey-700'>
                 <a href="/product">Order Now!</a>
            </button>
            </div>
           </div>
           <div className='w-1/2 shadow-lg shadow-grey-900 rounded-ee-full'> 
            <img src="\download 5.jpg" alt="" className='rounded-se-full'
             width={500}
                height={400} 
            />
           </div>
        </div>

    </section>
  )
}
