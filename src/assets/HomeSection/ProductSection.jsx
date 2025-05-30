import React from 'react'

export default function ProductSection() {
  return (
    //[#192338] [#D9E1F1] [#31487A] [#8FB3E2] [#1E2E4F]
    <section className="bg-[#192338] py-10 w-full min-h-screen">
      <div className="container mx-auto px-4 ">
        <div className="text-center w-fit h-fit p-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D9E1F1]">
            OUR PRODUCTS{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 p-4 ">
          <div className="bg-[#8FB3E2] p-8 rounded-lg shadow-lg shadow-grey-500 hover:shadow-[#1E2E4F]">
            <div className="font-4xl text-center font-semibold">
              <p className="font-[montserrat] text-[#192338]">COOLIN WHITE</p>
              <img
                src="CoolinWhite.png"
                alt=""
                className="w-60 h-70 rounded-lg"
              />
            </div>{" "}
          </div>
          <div className="bg-[#8FB3E2] p-8 rounded-lg shadow-lg shadow-grey-500 hover:shadow-[#1E2E4F]">
            <div className="font-4xl text-center font-semibold">
              <p className="text-[#192338] font-[montserrat]">COOLIN BLACK</p>
              <img
                src="CoolinBlack.png"
                alt=""
                className="w-60 h-70 rounded-lg"
              />
            </div>
          </div>
        </div>
        <button
          className="p-4 items-center justify-center text-center px-6 py-3 border-white 
          bg-[#31487A]  hover:bg-[#8FB3E2]  shadow-grey-900 rounded-bl-full"
        >
          <a
            href="/product"
            className="text-center text-[#D9E1F1] hover:text-[#192338] "
          >
            MORE
          </a>
        </button>
      </div>
    </section>
  );
}
