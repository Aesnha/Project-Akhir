import React from 'react'

export default function AboutSection() {
  return ( //[#192338] [#D9E1F1] [#31487A] [#8FB3E2] [#1E2E4F]
  <section class="bg-[#192338] py-16 px-6 md:px-20">
  <div class="max-w-5xl mx-auto text-center shadow-lg">
    <h2 class="text-4xl font-bold font-montserrat text-[#D9E1F1]  p-4 mb-4">ABOUT US</h2>
     <p class="text-lg font-montserrat text-[#D9E1F1] mb-8">
      COOL.IN hadir untuk kamu yang butuh kesegaran di tengah kesibukan. Kami membuat tumbler tahan dingin yang bukan hanya stylish, 
      tapi juga menjaga suhu tetap sejuk selama berjam - jam. Mau kerja lapangan, kuliah, olahraga, atau sekadar jalan santai-COOL.IN tetap menemani.  .
    </p>
    <div class="flex flex-col md:flex-row items-center justify-center gap-8">
      <div class="w-full md:w-1/3">
        <img src="KC.png" alt="My Photo" class="rounded-2xl shadow-lg mx-auto" />
      </div>
      <div class="w-full md:w-2/3 text-left pb-8">
        <p class="text-[#D9E1F1] mb-4">
         Terbuat dari teknologi terbaru sehingga air di dalam tumbler akan senantiasa dingin.
        </p>
       <h1 className='text-[#D9E1F1]'>COOL.IN bukan hanya tumbler, tapi penyegar hidupmu.</h1>
         <button className='p-4 items-center justify-center text-center px-6 py-3 border-white 
          bg-[#31487A]  hover:bg-[#8FB3E2]  shadow-grey-900 rounded-bl-full'>
                 <a href="/about" className='text-center text-[#8FB3E2] hover:text-[#D9E1F1] '>SEE MORE</a>
            </button>
      </div>
    </div>
  </div>
</section>
  )
}
