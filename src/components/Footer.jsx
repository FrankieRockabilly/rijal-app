import React, { useEffect } from 'react';
import { SoundcloudLogo } from '@phosphor-icons/react';
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import {
   FacebookLogo,
   WhatsappLogo,
   LinkedinLogo,
   InstagramLogo,
} from "@phosphor-icons/react";

const Footer = () => {
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger); // Register the plugin here

      gsap.fromTo(
         ".footer",
         {
            x: 50,
            opacity: 0,
            duration: 1.5,
         },
         {
            x: 0, // Use x: 0 instead of x: 1
            opacity: 1.5,
            scrollTrigger: {
               trigger: ".footer", // Ensure the trigger is correct
               start: "top 90%", // You may want to adjust this to fit the desired timing
               scrub: false, // Optional: makes the animation scrub as you scroll
            },
            duration: 1,
            ease: "power1",
         }
      );
   }, []);

   return (
      <>
         <div className="w-full px-5 lg:px-36 py-20 lg:py-32 bg-zinc-900 text-gray-400  overflow-hidden  ">
            <div className=" flex flex-col lg:flex-row justify-between items-start gap-5 ">
               {/* 1 */}
               <div className=" lg:w-96 max-w-72">
                  <SoundcloudLogo size={80} color="#2abbdf" weight="duotone" />
                  <p className="text-sm">
                     <span className="font-semibold">Rijal Homecare </span>
                     melayani kebutuhan perawatan kesehatan di rumah dengan
                     layanan profesional dan terpercaya. Kami menyediakan
                     layanan khitan dan pemeriksaan luka di rumah.
                  </p>

                  <div className="flex justify-end items-end gap-5 w-full py-5">
                     <a
                        href="https://www.facebook.com/m.rijal.7583"
                        target="blank"
                     >
                        <FacebookLogo size={35} weight="thin" />
                     </a>
                     <a href="https://wa.me/6282273212907" target="blank">
                        <WhatsappLogo size={35} weight="thin" />
                     </a>

                     <a
                        href="https://www.instagram.com/rizal_araffa93/"
                        target="blank"
                     >
                        <InstagramLogo size={35} weight="thin" />
                     </a>
                     <a href="#" target="blank">
                        <LinkedinLogo size={35} weight="thin" />
                     </a>
                  </div>
               </div>

               <div className=" lg:w-96 ">
                  <p className="font-bold text-xl mb-2 lg:mb-5 pb-5  border-b-2 border-white text-biru w-[50%]">
                     Layanan
                  </p>
                  <div className="text-sm lg:text-base flex flex-col justify-start items-start gap-5">
                     <p>Perawatan Luka</p>
                     <p>Layanan Khitan Super Ring</p>
                     <p>Konsultasi</p>
                  </div>
               </div>

               <div className=" lg:w-96 ">
                  <p className="font-bold text-xl mb-2 lg:mb-5 pb-5  border-b-2 border-white text-biru w-[50%]">
                     Useful Links
                  </p>
                  <div className="text-sm lg:text-base flex flex-col justify-start items-start gap-5">
                     <Link to={"/"}>
                        <p>Home </p>
                     </Link>
                     <Link to={"/about"}>
                        <p>Tentang </p>
                     </Link>
                     <Link to={"/contact"}>
                        <p>Kontak </p>
                     </Link>
                  </div>
               </div>

               <div className=" lg:w-96">
                  <p className="font-bold text-xl mb-2 lg:mb-5 pb-5 border-b-2 border-white text-biru w-[50%]">
                     Kontak
                  </p>
                  <div className="text-sm lg:text-base flex flex-col justify-start items-start gap-5">
                     <p className="font-bold">
                        Alamat :
                        <span className="font-light">
                           {" "}
                           Desa Karya Mulya, Rambah Samo, Rokan Hulu
                        </span>
                     </p>
                     <p className="font-bold">
                        E mail :
                        <span className="font-light">
                           {" "}
                           rizalaraffa14@gmail.com
                        </span>
                     </p>
                     <p className="font-bold">
                        Telp :
                        <span className="font-light"> +62 822 7321 2907</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-zinc-900 py-5">
            <p className="text-center text-gray-400 text-sm">
               © Copyright 2025 Ns.M Rijal Isdianto, S. Kep
            </p>
         </div>
      </>
   );
};

export default Footer;
