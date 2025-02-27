import React, { useEffect, useState } from "react";
import Line from "./Line";
import gallery from "../assets/json/gallery.json";

const Gallery = () => {
   // State untuk menampilkan modal dan menyimpan gambar yang dipilih
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);

   // auto di atas layar
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // Fungsi untuk membuka modal
   const openModal = (image) => {
      setSelectedImage(image); // Set gambar yang dipilih ke state
      setIsModalOpen(true); // Buka modal
   };

   // Fungsi untuk menutup modal
   const closeModal = () => {
      setIsModalOpen(false); // Menutup modal
      setSelectedImage(null); // Reset gambar yang dipilih
   };
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <div className="pb-10 pt-28 ">
            <div className="flex flex-col justify-center items-center gap-6">
               <h1 className="text-center text-2xl lg:text-3xl font-bold ">
                  Galeri Pengobatan
               </h1>
               <Line />
            </div>

            {/* Isi galeri */}
            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5 py-10">
               {gallery?.map((value, index) => {
                  return (
                     <div
                        className="w-40 h-36 lg:w-72 lg:h-64 bg-white p-2 border shadow-2xl"
                        key={index}
                     >
                        <img
                           src={value.gambar}
                           alt=""
                           className="w-full h-full object-cover cursor-pointer"
                           onClick={() => openModal(value.gambar)} // Menampilkan modal saat gambar diklik
                        />
                     </div>
                  );
               })}
            </div>

            {/* Modal */}
            {isModalOpen && (
               <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm "
                  onClick={closeModal} // Menutup modal saat klik di luar gambar
               >
                  <div
                     className="bg-white p-4  flex justify-center items-center"
                     onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik gambar
                  >
                     <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-[30rem] h-[25rem] object-cover "
                     />
                     <button
                        className="absolute top-4 right-4 text-white font-bold text-xl"
                        onClick={closeModal} // Menutup modal
                     >
                        X
                     </button>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default Gallery;
