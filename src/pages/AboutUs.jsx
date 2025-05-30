import React from 'react'

export default function about() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#192338] ">
      <div className="container md:flex md:text-left md:justify-between h-full py-8 text-center text-balance text-[#D9E1F1] w-full items-center">
        <div>
          <h1 className="text-xl md:text-4xl font-bold mb-2 px-4 font-[montserrat]">
            COOL.In
          </h1>
          <h2 className="text-xs md:text-xl font-lg mb-8 px-4 font-[montserrat] text-balance">
            Lupa menyimpan minuman di kulkas? COOL.In menjaga suhu tetap
            sempurna di mana pun.
          </h2>
          <button className="rounded hover:bg-[#1e2e4f] font-[montserrat] hover:text-[#D9E1F1] px-6 mx-4 h-fit text-[#1e2e4f] font-bold bg-[#D9E1F1]">
            <a href="/product">Beli Sekarang</a>
          </button>
        </div>
        <div className="flex items-center justify-center h-full">
          <img
            src="/CWT.png"
            alt=""
            className="w-40 md:w-72 object-contain mx-auto mb-10"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full min-h-[40vh] text-center bg-[#D9E1F1]">
        <h1 className="text-xl md:text-2xl font-extrabold mb-2 px-4 font-[montserrat] text-[#192338]">
          Game Changer dalam Menjaga Suhu Minuman
        </h1>
        <p className="text-[#192338] px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 text-sm md:text-base lg:text-lg mb-6 text-balance">
          Product kami dirancang dengan teknologi inovatif yang menghadirkan
          sistem pendingin di bagian bawah, memastikan suhu minuman tetap dingin
          secara merata di seluruh bagian dalam.
        </p>
      </div>
      <div className="container flex flex-col md:flex-row md:text-left md:justify-between text-center text-[#D9E1F1] w-full min-h-[60vh] items-center">
        <div className="flex flex-col md:flex-row md:text-left md:justify-between h-full py-8 text-center text-balance text-[#D9E1F1] w-full items-center">
          <div className="flex items-center w-full h-full justify-center order-1 md:order-none">
            <img
              src="/SUBJECT1.png"
              alt=""
              className="w-40 md:w-72 object-contain"
            />
          </div>
          <div className="w-full md:w-auto order-2 md:order-none mt-6 md:mt-0">
            <h1 className='font-extrabold text-4xl mb-4 px-4 font-[montserrat]'>Pilihan Terbaik</h1>
            <p className="font-medium mb-2 px-4 font-[montserrat] text-balance">
              Dengan desain yang ergonomis dan portabel, COOL.In memungkinkan
              Anda menikmati minuman dingin di mana saja, kapan saja. Baik saat
              beraktivitas di luar ruangan, bekerja, atau bersantai di rumah,
              COOL.In adalah teman setia Anda.
            </p>
            <p className="font-medium mb-2 px-4 font-[montserrat] text-balance">
              Dengan teknologi pendingin yang canggih, COOL.In menjaga suhu
              minuman tetap optimal, sehingga Anda dapat menikmati kesegaran
              setiap tegukan. Praktis dan efisien, COOL.In adalah solusi sempurna untuk
              menjaga minuman Anda tetap segar dan dingin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
