import React from 'react'
import Line from "./Line";
import gallery from "../assets/json/gallery.json";

const Gallery = () => {
   return (
      <>
         <div className="pb-10 pt-28 border border-red-400">
            <div className="flex flex-col justify-center items-center gap-6">
               <h1 className="text-center text-2xl lg:text-3xl font-bold ">
                  Galeri Pengobatan
               </h1>
               <Line />
            </div>

            {/* isi galeri */}
            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5 py-10">
               {/* 1 */}
               {gallery?.map((value, index) => {
                  return (
                     <div
                        className="w-40 h-36 lg:w-72 lg:h-64 bg-white p-2 border shadow-2xl"
                        key={index}
                     >
                        <img
                           src={value.gambar}
                           alt=""
                           className="w-full h-full object-cover"
                        />
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default Gallery