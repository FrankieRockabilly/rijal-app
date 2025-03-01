import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import reviews from "../assets/json/testimoonial.json";
import { Quotes } from "@phosphor-icons/react";
import Line from "./Line";


const Testimonial = () => {
   return (
      <div className="px-5 lg:px-40 py-10 lg:py-20 text-black flex flex-col lg:flex-row justify-between items-center ">
         {/* Bagian kiri */}
         <div className="flex flex-col justify-start items-start gap-2 lg:gap-5 w-auto text-[12px] lg:text-xl">
            <h1>Testimonial</h1>
            <p className="text-base lg:text-4xl font-semibold">
               Apa kata mereka
            </p>
            <Line />
            <i className="text-gray-600 text-[12px] lg:text-[15px]">
               "Pengalaman adalah hasil murni dari penjelasan yang tak
               terbantahkan. Setiap cerita yang mereka bagikan mencerminkan
               kepuasan, kenyamanan, dan manfaat nyata dari layanan kami.
               Dengarkan apa kata mereka dan temukan alasan mengapa kami menjadi
               pilihan terbaik"
            </i>
         </div>

         {/* Bagian kanan - Slider */}
         <div className="w-full lg:w-3/5 py-12 ">
            <Swiper
               loop={true} // Infinite scroll
               autoplay={{
                  delay: 0, // Tanpa jeda
                  disableOnInteraction: false, // Tetap berjalan meski ada interaksi
               }}
               speed={3000} // Kecepatan scroll (ms)
               modules={[Autoplay]} // Gunakan modul Autoplay
               className="w-full"
               breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 5 }, // Mobile
                  640: { slidesPerView: 2, spaceBetween: 5 }, // Tablet
                  1024: { slidesPerView: 3, spaceBetween: 10 }, // Laptop
               }}
            >
               {reviews.map((review, index) => (
                  <SwiperSlide
                     key={index}
                     className="flex justify-center items-center"
                  >
                     <div className="w-80 lg:w-full h-60 lg:h-[15rem]  flex flex-col justify-around items-start p-5 border rounded-2xl bg-slate-100">
                        <div className="h-32 flex flex-col justify-start w-full items-start overflow-hidden relative">
                           <div className="h-9 opacity-20 absolute top-0 left-0">
                              <Quotes size={76} color="#34bf8c" weight="fill" />
                           </div>
                           <p className="italic text-sm">"{review.review}" </p>
                        </div>
                        <hr className="w-full border border-gray-300 " />
                        <div className="flex justify-start items-center gap-5">
                           <div className="w-10 h-10 rounded-full overflow-hidden bg-red-600">
                              <img
                                 src={review.image}
                                 alt=""
                                 className="object-cover bg-center w-full h-full"
                              />
                           </div>
                           <div className="text-black text-sm">
                              <h1>{review.name} </h1>
                              <p className="text-gray-500 truncate">
                                 {review.status}{" "}
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonial;

