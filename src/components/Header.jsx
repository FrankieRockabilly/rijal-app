import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch, IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import gsap from "gsap";

export const Header = () => {
   const [isMenuClicked, setIsMenuClicked] = useState(false);
   const [isScroll, setIsScroll] = useState(false);
   const menuRef = useRef(null);

   const handleClickMenu = () => {
      setIsMenuClicked((prevState) => !prevState);
   };

   // Animasi GSAP
   useEffect(() => {
      gsap.fromTo(
         ".menu-item",
         { opacity: 0, y: -20 },
         {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
         }
      );
   }, [isMenuClicked]);

   return (
      <>
         <div
            className={`flex justify-between items-center px-5 lg:px-[10%] py-2 lg:py-4 w-full fixed top-0 z-40 bg-white shadow-lg backdrop-blur-3xl bg-opacity-85`}
         >
            <div>
               <nav>
                  <ul className="flex justify-start items-center gap-5">
                     <li className="mr-10">
                        <Link to="#">
                           <img
                              src="https://img.freepik.com/free-vector/flat-design-rr-logo-template_23-2149232004.jpg"
                              alt=""
                              className="w-12"
                           />
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>

            {/* menu yang muncul ketika ukuran layar lg */}
            <div className="hidden xl:flex justify-end items-center gap-8">
               <ul className="flex justify-start items-center gap-10 cursor-pointer text-gray-700">
                  <Link to={"/"}>
                     <li>Home</li>
                  </Link>
                  <Link to={"/"}>
                     <li>Tentang</li>
                  </Link>
                  <Link to={"/contact"}>
                     <li>Kontak</li>
                  </Link>
                  <li className="px-3 py-2 bg-biru rounded-md text-white">
                     Buat Janji / Booking
                  </li>
               </ul>

               <div className="relative">
                  <input
                     type="text"
                     className="border bg-zinc-50 w-96 rounded-md px-3 py-2 outline-none text-gray-600"
                     placeholder="Cari"
                  />
                  <div className="w-10 h-10 bg-biru absolute top-1/2 right-0 -translate-y-1/2 flex justify-center items-center rounded-md">
                     <IoIosSearch size={25} color="#f0f0f0" />
                  </div>
               </div>

               <div className="px-3 py-2 border border-biru rounded-md text-[#007c9d] hover:text-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-green-700 to-blue-900 cursor-pointer">
                  <FaPhoneAlt />
                  <p>+628123456</p>
               </div>
               <div className="px-3 py-2 border border-biru rounded-md text-[#007c9d] hover:text-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-green-700 to-blue-900 cursor-pointer">
                  <IoMdMail />
                  <p>rizalaraffa14@gmail.com</p>
               </div>
            </div>

            {/* hamburger menu ketika ukuran sm */}
            <div className="xl:hidden">
               <VscListSelection size={25} onClick={handleClickMenu} />
            </div>
         </div>

         {/* Munculkan menu jika isMenuClicked true */}
         {isMenuClicked && (
            <div
               ref={menuRef}
               className="fixed min-h-screen w-full bg-white flex flex-col justify-center items-center gap-14 z-30 text-xl shadow-lg"
            >
               <p className="menu-item">Home</p>
               <p className="menu-item">Tentang</p>
               <p className="menu-item">Kontak</p>
               <p className="menu-item">Booking Online</p>
               <button
                  onClick={() => setIsMenuClicked(false)}
                  className="bg-red-700 px-5 py-1 rounded-md text-white"
               >
                  x
               </button>
            </div>
         )}
      </>
   );
};

export default Header;
