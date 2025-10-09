import React, { useEffect, useState } from 'react'
import news from "../assets/json/news.json";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const News = () => {
   const [all, setALl] = useState(true);
   const [khitan, setKhitan] = useState(false);
   const [luka, setLuka] = useState(false);

   const [filteredNews, setFilteredNews] = useState(news);

   //  const showSlice = news.slice(0,3)

   const clickAll = () => {
      setALl(true);
      setKhitan(false);
      setLuka(false);
      setFilteredNews(news);
   };
   const clickKhitan = () => {
      setKhitan(true);
      setALl(false);
      setLuka(false);
      setFilteredNews(news.filter((items) => items.category == "khitan"));
   };
   const clickLuka = () => {
      setLuka(true);
      setKhitan(false);
      setALl(false);
      setFilteredNews(news.filter((items) => items.category == "luka"));
   };

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
         ".news",
         {
            opacity: 0,
            x: 20,
         },
         {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.2,
            scrollTrigger: {
               trigger: ".news",
               start: "top 80%",
            },
            ease: "power2.in",
         }
      );
   }, [filteredNews]);

   return (
      <>
         {/* tulisan dibawah */}
         <div className="px-5 py-10 lg:py-20 ">
            <div className="flex justify-center items-center gap-5 ">
               <hr className="bg-gray-600 w-full" />
               <h2 className="text-center text-2xl py-2  uppercase font-bold min-w-52 text-black ">
                  Artikel
               </h2>
               <hr className="bg-gray-900 w-full" />
            </div>
            <div className="flex justify-center items-center gap-2 lg:gap-5 py-5 xl:pt-5 xl:pb-10 text-[12px] lg:text-base">
               <button
                  onClick={clickAll}
                  className={`flex justify-center items-center gap-2 ${
                     all ? "text-biru" : "text-gray-600"
                  }`}
               >
                  <p>All</p>
                  <MdOutlineKeyboardArrowRight />
               </button>
               <button
                  onClick={clickKhitan}
                  className={`flex justify-center items-center gap-2 ${
                     khitan ? "text-biru" : "text-gray-600"
                  } `}
               >
                  <p>Khitan Super Ring</p>
                  <MdOutlineKeyboardArrowRight />
               </button>
               <button
                  onClick={clickLuka}
                  className={`flex justify-center items-center gap-2 ${
                     luka ? "text-biru" : "text-gray-600"
                  }`}
               >
                  <p>Rawatan Luka</p>
               </button>
            </div>

            {/* flex */}
            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5 w-full">
               {filteredNews == null ? (
                  <p className="text-gray-500">Isi berita Kosong guys</p>
               ) : (
                  filteredNews?.map((value, index) => (
                     <div
                        className="p-1 rounded-lg w-[10rem] h-64 md:w-[15rem] lg:w-[22rem] lg:h-64 border shadow-lg flex flex-col relative text-sm news"
                        key={index}
                     >
                        <div className="h-full overflow-hidden rounded-lg ">
                           <img src={value.urlToImage} alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className='absolute bottom-2 bg-white w-[80%] right-1/2 transform translate-x-1/2 px-2 py-1 overflow-hidden shadow-lg border'>
                           {value.title}
                        </div>
                     </div>
                  ))
               )}
            </div>
         </div>
      </>
   );
};

export default News