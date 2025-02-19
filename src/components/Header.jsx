import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch,IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";

export const Header = () => {

  const [isMenuClicked, setIsMenuCLicked] = useState(false)

  const handleClickMenu = ()=>{
    setIsMenuCLicked(prevState => !prevState)
    console.log(isMenuClicked);
  }


   return (
      <>
         <div className="flex justify-between items-center  px-5 lg:px-[10%] py-2 lg:py-4 w-full fixed top-0 z-20 shadow-lg backdrop-blur-3xl bg-opacity-85">
            <div>
               <nav className="">
                  <ul className="flex justify-start items-center gap-5">
                     <li className="mr-10">
                        <Link href="#">
                           <img
                              src="https://img.freepik.com/free-vector/flat-design-rr-logo-template_23-2149232004.jpg?t=st=1739775727~exp=1739779327~hmac=9d63e26f1dcf9191da141170bcd34cc7de6cf9da60c8e43f33f87667e952e4b5&w=826"
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
                <div>
                    <ul className="flex justify-start items-center gap-10 cursor-pointer text-gray-700">
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/'}><li>Tentang</li></Link>
                        <Link to={'/contact'}><li>Kontak</li></Link>
                        <li className="px-3 py-2 bg-biru rounded-md text-white">Booking Online</li>
                    </ul>
                </div>
               <div className="relative">
                  <input
                     type="text"
                     className="border bg-zinc-50 w-96 rounded-md px-3 py-2 outline-none text-gray-600"
                     placeholder="cari"
                  />
                  <div className="w-10 h-10 bg-biru absolute top-1/2 right-0 -translate-y-1/2 flex justify-center items-center rounded-md">
                     <IoIosSearch size={25} color="#f0f0f0" />
                  </div>
               </div>

               <div className="px-3 py-2 border border-biru rounded-md text-[#007c9d] hover:text-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-green-700 to-blue-900 cursor-pointer">
                  <p>
                     <FaPhoneAlt />
                  </p>
                  <p>+628123456</p>
               </div>
               <div className="px-3 py-2 border border-biru rounded-md text-[#007c9d] hover:text-white flex justify-center items-center gap-2 hover:bg-gradient-to-r from-green-700 to-blue-900 cursor-pointer">
                  <p>
                     <IoMdMail />
                  </p>
                  <p>rizalaraffa14@gmail.com</p>
               </div>
              
            </div>

            {/* hamburger menu ketika ukuran sm */}
            <div className="xl:hidden">
               <VscListSelection size={25} onClick={handleClickMenu}/>
            </div>

            {/* munculkan menu jika isMenuClicked true */}
         </div>
         {isMenuClicked &&(
          <div className="min-h-screen w-full absolute top-0 overflow-hidden bg-white flex flex-col justify-center items-center gap-10 z-30">
              <p>Home </p>
              <p>Home </p>
              <p>Home </p>
              <p>Home </p>

              <button onClick={()=>setIsMenuCLicked(false)}>Close</button>
          </div>
         )}
      </>
   );
};

export default Header;
