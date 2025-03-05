import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
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
         ".navmenu",
         { opacity: 0, height: -20 },
         {
            opacity: 1,
            height: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
         }
      );
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
                        <a href="./">
                           <img
                              src="https://res.cloudinary.com/dplikeeby/image/upload/v1740844540/RIJALHOMECARE_vmjuwa.png"
                              // src="https://res.cloudinary.com/dplikeeby/image/upload/v1740987484/Preview_ox3qlp.jpg"
                              alt=""
                              className="w-12"
                              // onClick={refresh}
                           />
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>

            {/* menu yang muncul ketika ukuran layar lg */}
            <div className="hidden xl:flex justify-end items-center gap-8">
               <ul className="flex justify-start items-center gap-10 cursor-pointer text-gray-700">
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? "text-blue-500" : "hover:text-blue-500"
                     }
                  >
                     <li>Home</li>
                  </NavLink>
                  <NavLink
                     to={"/about"}
                     className={({ isActive }) =>
                        isActive ? "text-biru" : "hover:text-biru"
                     }
                  >
                     <li>Tentang</li>
                  </NavLink>
                  <NavLink
                     to={"/contact"}
                     className={({ isActive }) =>
                        isActive ? "text-biru" : "hover:text-biru"
                     }
                  >
                     <li>Kontak</li>
                  </NavLink>
                  <NavLink
                     to={"/gallery"}
                     className={({ isActive }) =>
                        isActive ? "text-biru" : "hover:text-biru"
                     }
                  >
                     <li>Galeri</li>
                  </NavLink>

                  <li className="px-3 py-2 bg-biru rounded-md text-white">
                     Buat Janji / Booking
                  </li>
               </ul>

               {/* <div className="relative">
                  <input
                     type="text"
                     className="border bg-zinc-50 w-96 rounded-md px-3 py-2 outline-none text-gray-600"
                     placeholder="Cari"
                  />
                  <div className="w-10 h-10 bg-biru absolute top-1/2 right-0 -translate-y-1/2 flex justify-center items-center rounded-md">
                     <IoIosSearch size={25} color="#f0f0f0" />
                  </div>
               </div> */}

               <div className="px-3 py-2 border border-biru rounded-md text-[#007c9d] hover:text-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-green-700 to-blue-900 cursor-pointer">
                  <FaPhoneAlt />
                  <a href="http://wa.me/+6282273212907" target="blank">
                     <p>+6282-7321-2907</p>
                  </a>
               </div>
               <div className="px-3 py-2 border border-biru rounded-md text-[#007c9d] hover:text-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-green-700 to-blue-900 cursor-pointer">
                  <IoMdMail />
                  <a href="mailto:rizalaraffa14@gmail.com" target="_blank">
                     <p>rizalaraffa14@gmail.com</p>
                  </a>
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
               className="fixed min-h-screen w-full bg-white flex flex-col justify-center items-center gap-14 z-30 text-xl shadow-lg navmenu"
               onClick={() => setIsMenuClicked(false)}
            >
               <Link to={"/"}>
                  <p className="menu-item">Home</p>
               </Link>
               <Link to={"/about"}>
                  <p className="menu-item">Tentang</p>
               </Link>
               <Link to={"/contact"}>
                  <p className="menu-item">Kontak</p>
               </Link>
               <Link to={"/gallery"}>
                  <p className="menu-item">Galeri</p>
               </Link>
               <Link to={"/about"}>
                  <p className="menu-item">Booking Online</p>
               </Link>

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
