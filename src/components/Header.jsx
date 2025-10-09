import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

// react icons
import { CiSearch } from "react-icons/ci";
import { FaAngleDown,FaGlobe,FaInstagram ,FaFacebookF ,FaLinkedin,FaWhatsapp, FaUserCircle  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { MdWifiCalling1 } from "react-icons/md";
import { CiMail } from "react-icons/ci";

import homecareLogo from '../assets/Image/homecareLogo.png'
import gsap from "gsap";
import KhitanContent from "./headerContent/KhitanContent";
import RawatanContent from "./headerContent/RawatanContent";

export const Header = () => {
   const [isMenuClicked, setIsMenuClicked] = useState(false);
   // const [isScroll, setIsScroll] = useState(false);
   const menuRef = useRef(null);
   const [isOpen, setIsOpen] = useState(false);

   const [activeTabs, setActiveTabs] = useState('Layanan Khitan')
   const tabs= [
      { id:1, label:"Layanan Khitan" , route : "#",},
      { id:2, label:"Layanan Rawatan Luka" , route : "#"}
   ]

   const handleClickMenu = () => {
      setIsMenuClicked((prevState) => !prevState);
   };


   // Animasi GSAP
   useEffect(() => {
      gsap.fromTo(
         ".navmenu",
         { opacity: 0, y: 0 },
         {
            opacity: 1,
            y: 1,
            duration: 0.2,
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
            duration: 0.2,
            stagger: 0.1,
            ease: "power1.out",
         }
      );
   }, [isMenuClicked]);

   return (
      <>
         <div className={`flex flex-col  w-full fixed top-0 z-40 bg-white shadow-lg backdrop-blur-3xl py-1`}>
            {/* header top oren dan hitam */}
               <div className="w-full justify-between items-start hidden lg:flex">
                  {/* Kiri: Orange - hanya kanan miring */}
                  <div
                     className="w-[50%] h-14 text-white px-32 py-3 flex items-center justify-center gap-5 xl:gap-10 text-xs xl:text-sm"
                     style={{ 
                        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
                        background: 'linear-gradient(to right, #f97316, #fb923c)'
                     }}
                  >
                     <div className="flex justify-start items-center gap-2">
                        <div className="p-1 bg-white rounded-md">
                           <MdWifiCalling1 size={15} color="#f97316" />
                        </div>
                        <p>+6282273212907</p>
                     </div>
                     <div className="flex justify-start items-center gap-2">
                        <div className="p-1 bg-white rounded-md">
                           <FaGlobe  size={15} color="#f97316" />
                        </div>
                        <p>RijalHomecare</p>
                     </div>
                     <div className="flex justify-start items-center gap-2">
                        <div className="p-1 bg-white rounded-md">
                           <CiMail  size={15} color="#f97316" />
                        </div>
                        <p>rizalaraffa14@gmail.com</p>
                     </div>
                  </div>

                  {/* Kanan: Hitam ke abu - kiri miring */}
                  <div
                     className="w-[50%] h-12 text-white px-14 xl:px-32 py-3 flex items-center justify-between gap-4 xl:gap-10 text-sm"
                     style={{ 
                        clipPath: 'polygon(4% 0, 100% 0, 100% 100%, 0 100%)',
                        background: 'linear-gradient(to right, #000, #64748b)' // from-black to-slate-500
                     }}
                  >
                     <div className="flex justify-start items-center gap-3 w-full">
                        <a href="#">
                           <FaInstagram size={18} />
                        </a>
                        <a href="#">
                           <FaFacebookF size={18} />
                        </a>
                        <a href="#">
                           <FaXTwitter size={18} />
                        </a>
                        <a href="#">
                           <FaLinkedin size={18} />
                        </a>
                        <a href="#">
                           <FaWhatsapp  size={18} />
                        </a>
                     </div>

                     <p className="w-full">|</p>
                     <div className="relative">
                        <input type="text" placeholder="cari" className="px-3 py-2 rounded-sm outline-none text-gray-700"/>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                           <CiSearch color="#000000" size={20}/>
                        </div>
                     </div>
                     
                     <button>
                        <FaUserCircle size={25}/>
                     </button>
                  </div>
                  {/* end kanan black polygon */}
               </div>

{/* header master */}
               <div className="sticky top-7 flex justify-between items-center bg-white px-5 lg:px-[7%]">
                  <div className="w-auto">
                           <div className="mr-10">
                              <a href="./">
                                 <img
                                    src={homecareLogo}
                                    alt=""
                                    className="w-12 lg:w-16"
                                 />
                              </a>
                           </div>
                  </div>

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
                        <p>|</p>
                        <NavLink
                           to={"/about"}
                           className='hover:text-biru'
                        >
                           <li>Tentang</li>
                        </NavLink>
                        <p>|</p>

                        <div 
                           className="relative py-5"
                           onMouseEnter={() => setIsOpen(true)}
                           onMouseLeave={() => setIsOpen(false)}
                        >
                           <div className="hover:text-biru flex justify-center items-center gap-3 cursor-pointer ">
                           <p>Layanan</p>
                           <FaAngleDown />
                           </div>

                           {isOpen && (
                           <div className="absolute left-1/2 transform -translate-x-1/2 -z-50 top-full mt-0 bg-white py-5 px-7 w-max border-t-2 border-biru shadow-lg">
                              <div className="flex justify-start items-start gap-20 py-4 lg:text-base xl:text-lg font-semibold ">
                                    {tabs.map((item)=>(
                                       <button key={item.id} onClick={()=> setActiveTabs(item.label)}
                                       className={`border-b-2  py-1 ${activeTabs === item.label ? "border-biru text-biru" : "border-gray-500 hover:border-biru"}`}
                                       > {item.label} </button>
                                    ))}
                              </div>

                              <div className="flex justify-start items-start gap-20 mt-5 ">
                              {activeTabs === "Layanan Khitan" && <KhitanContent />}
                              {activeTabs === "Layanan Rawatan Luka" && <RawatanContent />}
                              </div>

                              <button className="my-10 px-5 py-3 bg-biru hover:bg-sky-800 transition-all duration-150 ease-out text-white rounded-md flex justify-center items-center gap-3">
                                 <p className="text-sm">Semua Layanan</p>
                                 <GoArrowRight />
                              </button>
                           </div>
                           )}
                        </div>
                        <p>|</p>
                        <NavLink
                           to={"/contact"}
                           className={({ isActive }) =>
                              isActive ? "text-biru" : "hover:text-biru"
                           }
                        >
                           <li>Kontak</li>
                        </NavLink>

                        <p>|</p>

                        <NavLink
                           to={"/gallery"}
                           className={({ isActive }) =>
                              isActive ? "text-biru" : "hover:text-biru"
                           }
                        >
                           <li>Galeri</li>
                        </NavLink>
                     </ul>
                  </div>

                  {/* hamburger menu smaoll device */}
                  <div className="flex justify-center items-center gap-3 text-black">
                     <a href={"/login"}>
                        {/* <button className="flex justify-center items-center gap-2 px-3 py-2 bg-biru rounded-md text-white">
                           <CiUser size={20} />
                           <p>Login</p>
                        </button> */}
                     </a>
                     <div className="xl:hidden" onChange={handleClickMenu}>
                        <label className=" swap swap-rotate">
                              {/* this hidden checkbox controls the state */}
                              <input type="checkbox" />

                              {/* hamburger icon */}
                              <svg
                                 className="swap-off fill-current"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="25"
                                 height="25"
                                 viewBox="0 0 512 512">
                                 <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                              </svg>

                              {/* close icon */}
                              <svg
                                 className="swap-on fill-current"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="25"
                                 height="25"
                                 viewBox="0 0 512 512">
                                 <polygon
                                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                              </svg>
                           </label>
                     </div>
                  </div>
               </div>

            {/* hamburger menu ketika ukuran sm */}
         </div>

         {/* Munculkan menu jika isMenuClicked true */}
         {isMenuClicked && (
            <div
               ref={menuRef}
               className="fixed h-auto w-full py-7 text-base mt-12 bg-white flex flex-col justify-center items-center gap-8 z-30 shadow-lg navmenu"
            >
               <Link to={"/"} onClick={() => setIsMenuClicked(false)}>
                  <p className="menu-item hover:text-biru">Home</p>
               </Link>
               <Link to={"/about"} onClick={() => setIsMenuClicked(false)}>
                  <p className="menu-item hover:text-biru">Tentang</p>
               </Link>
               <Link to={"/contact"} onClick={() => setIsMenuClicked(false)}>
                  <p className="menu-item hover:text-biru">Kontak</p>
               </Link>
               <Link to={"/gallery"} onClick={() => setIsMenuClicked(false)}>
                  <p className="menu-item hover:text-biru">Galeri</p>
               </Link>
               <Link to={"/about"} onClick={() => setIsMenuClicked(false)}>
                  <p className="menu-item hover:text-biru">Booking Online</p>
               </Link>
            </div>
            )}

      </>
   );
};

export default Header;
