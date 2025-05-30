import React from 'react'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen font-[montserrat] bg-[#192338] pt-16 md:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start rounded-ss-full h-auto bg-[#1E2E4F] shadow-lg shadow-[#31487A] p-4 sm:p-6 md:p-12 mb-6 md:mb-0">
          <h1 className="font-bold mb-4 text-2xl mx-6 sm:text-3xl md:text-4xl lg:text-6xl text-center md:text-left text-white drop-shadow">
            COOL.In
          </h1>
          <p className="px-2 sm:px-0 md:px-6 text-base sm:text-lg md:text-xl font-semibold text-[#D9E1F1] text-center md:text-left">
            Hidup sudah cukup panas jadi biarkan minumanmu tetap dingin. Dapatkan tumbler COOL.In
          </p>
        </div>
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-3 p-6">
          <img
            src="CWT.png"
            alt=""
            className="w-auto h-40 sm:w-auto sm:h-56 md:w-auto md:h-90 object-cover"
            width={300}
            height={300}
          />
          <button className="text-base md:text-lg text-center p-3 rounded-full py-3 border-white bg-amber-50 hover:bg-[#31487A] transition-colors">
            <a href="/product">Order Now!</a>
          </button>
        </div>
      </div>
    </section>
  )
}
