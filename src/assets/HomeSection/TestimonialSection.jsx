import React from 'react'

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#192338]">
      <div className="container font-[montserrat] mx-auto px-4 bg-[#31487A] rounded-se-full">
        <div className="text-center mb-16 mx-auto rounded-full items-center justify-center ">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-[#D9E1F1] ">
            What They Say
          </h2>
          <div className="w-20 h-1   mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 ">
          {/* Testimonial 1 */}

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg shadow-[#D9E1F1] rounded-r-md  ">
            <div className="flex items-center justify-center mb-4 ">
              <div className="p-3 text-center">
                <h4 className="text-xl font-bold text-[#192338]]">
                  Rendi Hermawan
                </h4>
                <p className="text-medium text-[#192338]">
                  Atlet Lari
                </p>
              </div>
            </div>
            <p className="text-[#192338] text-sm italic">
              "Sebagai Atlet Lari, tumbler COOL.IN adalah penyelamat! air tetap
              dingin meski di ruangan outdoor."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg shadow-[#D9E1F1]  ">
            <div className="flex items-center justify-center mb-4 ">
              <div className="p-3 text-center">
                <h4 className="text-xl font-bold text-[#192338]">
                  Floren Lestari
                </h4>
                <p className="text-medium text-[#192338]">
                  Perawat
                </p>
              </div>
            </div>
            <p className="text-[#192338] text-sm italic">
              "Bekerja di tempat super sibuk, tubuh harus terhidrasi dengan
              baik. Meski harus minum di sela - sela menangani pasien. Air yang
              dibawa dari pagi tetap dingin, rasanya menenangkan minumnya waktu
              tenggorokan kering."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg shadow-[#D9E1F1]  ">
            <div className="flex items-center justify-center ">
              <div className="p-3 text-center">
                <h4 className="text-xl font-bold text-[#192338]">
                  Suherman
                </h4>
                <p className="text-medium text-[#192338]">
                  Petani
                </p>
              </div>
            </div>
            <p className="text-[#192338] text-sm italic">
              "Di ladang, cuaca bisa sangat panas, dan minum air dingin adalah
              hal yang sangat dinanti. Tumblr ini luar biasa. Sampai tengah
              hari, masih dingin rasanya. Sekarang, badan saya rasanya lebih
              segar dan tidak cepat lemas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
