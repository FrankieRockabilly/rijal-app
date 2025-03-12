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
         <div className="px-5 py-20 ">
            <div className="flex justify-center items-center gap-5 ">
               <hr className="bg-gray-600 w-full" />
               <h2 className="text-center text-2xl py-2  uppercase font-bold min-w-52 text-black ">
                  b e r I t A
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
            <div className="flex flex-wrap justify-center items-center gap-5 w-full px-5  ">
               {filteredNews == null ? (
                  <p className="text-gray-500">Isi berita Kosong guys</p>
               ) : (
                  filteredNews?.map((value, index) => (
                     <div
                        className="p-2 rounded-lg w-[22rem] h-80 border shadow-lg flex flex-col relative news"
                        key={index}
                     >
                        <div className="h-[70%] overflow-hidden rounded-lg">
                           <img src={value.urlToImage} alt="" />
                        </div>
                        <div className="grow text-black font-light flex flex-col justify-start items-start h-32 overflow-hidden">
                           <h3 className="text-base h-full break-words max-h-16 font-light py-2">
                              {value.title}
                           </h3>
                           <a
                              href={value.url}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <button className="py-2 px-5 bg-biru rounded-md text-white absolute bottom-2 left-2  hover:bg-blue-900 duration-300 transition-all ease-in-out border-4 border-white">
                                 Lihat berita
                              </button>
                           </a>
                        </div>
                     </div>
                  ))
               )}
            </div>
            {/* {news == null ? (
               ""
            ) : (
               <div className="flex justify-center items-center py-10">
                  <button
                     className="py-2 px-5 rounded-md flex justify-center items-center gap-2"
                     onClick={clickLebihBanyak}
                  >
                     <p>lihat lebih banyak</p>
                     <MdKeyboardDoubleArrowRight />
                  </button>
               </div>
            )} */}
         </div>
      </>
   );
};

export default News