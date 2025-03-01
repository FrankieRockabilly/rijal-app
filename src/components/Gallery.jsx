import React, { useEffect, useState, useRef } from "react";
import Line from "./Line";
import gallery from "../assets/json/gallery.json";
import gsap from "gsap";

const Gallery = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState(null);
   const [filteredGallery, setFilteredGallery] = useState(gallery);
   const [all, setAll] = useState(true);
   const [luka, setLuka] = useState(false);
   const [khitan, setKhitan] = useState(false);

   const gsapTriggered = useRef(false); // Reference untuk melacak apakah GSAP sudah dijalankan

   // Auto scroll ke atas layar
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   // Menjalankan GSAP hanya sekali ketika galeri dimuat pertama kali
   useEffect(() => {
      if (!gsapTriggered.current) {
         gsap.fromTo(
            ".gallery",
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: "expo.in" }
         );
         gsapTriggered.current = true; // Menandai bahwa GSAP sudah dijalankan
      }
   }, []); // Empty dependency array untuk memastikan efek hanya dipicu sekali

   // Menjalankan GSAP setiap kali kategori galeri berubah
   useEffect(() => {
      gsap.fromTo(
         ".gallery",
         { opacity: 0, x: 20 },
         { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: "expo.in" }
      );
   }, [filteredGallery]); // Memicu animasi ketika filteredGallery berubah (kategori diubah)

   const handleClickAll = () => {
      setAll(true);
      setKhitan(false);
      setLuka(false);
      setFilteredGallery(gallery); // Menampilkan semua galeri
   };
   const handleClickKhitan = () => {
      setKhitan(true);
      setLuka(false);
      setAll(false);
      setFilteredGallery(
         gallery.filter((items) => items.kategori === "khitan")
      );
   };
   const handleClickLuka = () => {
      setKhitan(false);
      setLuka(true);
      setAll(false);
      setFilteredGallery(gallery.filter((items) => items.kategori === "luka"));
   };

   // Fungsi untuk membuka modal
   const openModal = (image) => {
      setSelectedImage(image);
      setIsModalOpen(true);
   };

   // Fungsi untuk menutup modal
   const closeModal = (e) => {
      e.stopPropagation();
      setIsModalOpen(false);
      setSelectedImage(null);
   };

   return (
      <div className="pb-10 pt-28">
         <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-center text-2xl lg:text-3xl font-bold text-zinc-900">
               Galeri Pengobatan
            </h1>
            <Line />
         </div>

         {/* Isi galeri */}
         <div className="flex justify-center items-center gap-3 lg:gap-5 py-10">
            <button className={all ? "text-biru" : ""} onClick={handleClickAll}>
               All
            </button>
            <button
               className={luka ? "text-biru" : ""}
               onClick={handleClickLuka}
            >
               Pengobatan Luka
            </button>
            <button
               className={khitan ? "text-biru" : ""}
               onClick={handleClickKhitan}
            >
               Khitan Super Ring
            </button>
         </div>
         <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5">
            {filteredGallery?.map((value, index) => {
               return (
                  <div
                     className="w-40 h-36 lg:w-72 lg:h-64 bg-white p-2 border shadow-2xl gallery"
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
               className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
               onClick={closeModal}
            >
               <div
                  className="bg-white p-4 flex justify-center items-center"
                  onClick={(e) => e.stopPropagation()}
               >
                  <img
                     src={selectedImage}
                     alt="Selected"
                     className="w-[30rem] h-[25rem] object-contain"
                  />
                  <button
                     className="absolute top-4 right-4 text-white font-bold text-xl"
                     onClick={closeModal}
                  >
                     X
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Gallery;
