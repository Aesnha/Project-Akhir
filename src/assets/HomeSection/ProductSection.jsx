import React from 'react'

export default function ProductSection() {
  return ( //[#192338] [#D9E1F1] [#31487A] [#8FB3E2] [#1E2E4F]
    <section className="bg-[#192338] py-20 w-full min-h-screen">
    <div className="container mx-auto px-4 ">
        <div className="text-center w-fit h-fit p-4 mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D9E1F1] mb-4">
            OUR PRODUCTS </h2>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
        <div className="bg-[#8FB3E2] p-8 rounded-lg shadow-lg shadow-grey-500 hover:shadow-[#1E2E4F]">
            <div className='font-4xl text-center font-semibold'>
                <p>TUMBLER KACA</p>
                <img src="\download.jpg" alt="" className='w-100 h-100 rounded-lg'/></div> </div>
        <div className="bg-[#8FB3E2] p-8 rounded-lg shadow-lg shadow-grey-500 hover:shadow-[#1E2E4F]">
         <div className='font-4xl text-center font-semibold'>
                <p>TUMBLER STAINLESS STELL</p>
                <img src="\download3.jpg" alt=""  className='w-100 h-97 rounded-lg' /></div></div>
        <div className="bg-[#8FB3E2] p-8 rounded-lg shadow-lg shadow-grey-500 hover:shadow[#1E2E4F]">
         <div className='font-4xl text-center font-semibold'>
                <p>TUMBLER PLASTIK</p>
                <img src="\download2.jpg" alt=""  className='w-100 h-100 rounded-lg' /></div>
        </div>
        </div>
        <button className='p-4 items-center justify-center text-center px-6 py-3 border-white 
          bg-[#31487A]  hover:bg-[#8FB3E2]  shadow-grey-900 rounded-bl-full'>
                 <a href="/about" className='text-center text-[#8FB3E2] hover:text-[#D9E1F1] '>MORE</a>
            </button>
    </div>
   </section>
  )
}
