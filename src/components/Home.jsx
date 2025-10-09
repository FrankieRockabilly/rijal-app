import React, { useEffect, useState } from "react";
import Line from "./Line";
import {
   PiHeadsetThin,
   PiStethoscopeThin,
   PiSyringe,
} from "react-icons/pi";

// icons
import { ArrowRight,FirstAidKit,HouseLine ,Stethoscope,Drop ,ClockCounterClockwise,ShieldCheck   } from "@phosphor-icons/react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import { MdMarkChatRead } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { RxScissors } from "react-icons/rx";


import rijal from "../assets/Image/rjl.png";
import excitedPerson from "../assets/Image/omg2.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Testimonial from "./Testimonial";
import { CiTimer } from "react-icons/ci";
import Booking from "./Booking";
import News from "./News";

const Home = () => {
   const [size, setSize] = useState(0);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;

         if (width < 768) {
            setSize(15); // Untuk tampilan mobile
         } else if (width >= 768 && width < 1024) {
            setSize(35); // Untuk tampilan tablet
         } else {
            setSize(40); // Untuk tampilan desktop
         }
      };

      // Panggil handleResize saat komponen pertama kali dimuat
      handleResize();

      // Pasang event listener saat ukuran jendela berubah
      window.addEventListener("resize", handleResize);

      // Hapus event listener saat komponen tidak lagi digunakan
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".home", { scale: 1, opacity: 1, duration: 1 });
      gsap.fromTo(
         ".kiri",
         { x: -50, opacity: 0 },
         { x: 0, opacity: 1, duration: 1.5, delay: 1, ease: "power1", stagger : 0.5 }
      );
      gsap.fromTo(
         ".homecare",
         { y: -30, opacity: 0 },
         { y: 0, opacity: 1, duration: 1.5, delay: 1, ease: "power1.inOut" }
      );
      gsap.fromTo(
         ".kanan",
         { x: 50, opacity: 0 },
         { x: 0, opacity: 1, duration: 1.5, delay: 2, ease: "power1.inOut" }
      );

      // layanan
      gsap.fromTo(
         ".layanan",
         { y: 50, opacity: 0 },
         {
            y: 0,
            scrollTrigger: {
               trigger: ".layanan",
               start: "top 80%",
               scrub: false,
            },
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.inOut",
         }
      );

      // scroll trigger
      // speciality
      gsap.fromTo(
         ".speciality",
         { x: -50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
               trigger: ".speciality",
               start: "top 90%",
               scrub: false,
            },
            duration: 0.5,
            ease: "power1.inOut",
         }
      );
      // scroll trigger
      // pilih kiri
      gsap.fromTo(
         ".pilihKiri",
         { x: -50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".pilihKiri",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            ease: "power1.inOut",
         }
      );
      // pilih kanan
      gsap.fromTo(
         ".pilihKanan",
         { x: 50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".pilihKanan",
               start: "top 80%",
               scrub: false,
               stagger : 0.3
            },
            duration: 1,
            ease: "power1.inOut",
         }
      );
   }, []);

   return (
      <>
         <div className="  bg-warm overflow-hidden h-full relative">
            <div className="relative pt-10 lg:pt-14 ">
               {/* hero section */}
               <div className="h-[32rem] lg:h-[100vh] w-full bg-gradient-to-br from-[#007c9d] to-gray-200 text-black flex justify-start items-center overflow-hidden relative" >
                  {/* <div className="absolute top-[20%] lg:top-[10%] translate-y-1/2 left-8 lg:right-[35%] z-10 ">
                     <h1 className="font-extrabold text-5xl lg:text-[10rem] tracking-tighter opacity-10">
                        HOME CARE
                     </h1>
                  </div> */}
                  {/* 1 */}
                  <div className=" max-w-full h-full px-5 md:px-32  xl:px-[17rem] flex flex-col justify-center items-start lg:gap-3 z-10">
                     <div className="flex justify-start items-center gap-2 homecare">
                        <Line />
                        <p className="text-[9px] lg:text-sm">Ns. Muhammad Rijal, S. Kep, Cwcca</p>
                     </div>
                     <h1 className="font-bold text-4xl lg:text-8xl xl:text-[11rem] text-white homecare">
                        Home Care
                     </h1>
                     <p className="text-xl md:text-3xl xl:text-5xl font-semibold  kiri">
                        Layanan{" "}
                        <span className="text-orange-500">
                           Kesehatan Masyarakat
                        </span>
                     </p>
                     <p className="text-[11px] md:text-lg xl:text-2xl w-72  lg:w-[30rem] text-white  kiri">
                        Pelayanan medis profesional langsung di rumah Anda : aman, nyaman, dan terpercaya.
                     </p>
                     <div className="w-full flex flex-col justify-start items-start gap-5">
                        {/* ceklis */}
                        <div className="w-[90%] md:w-full flex flex-col justify-start items-start gap-1 lg:gap-3 my-7 text-white text-[10px] lg:text-base">
                           <div className="flex justify-start items-center gap-1 md:gap-2 kiri">
                              <FaCheck color="#00FF00"/>
                              <p>Bersertifikat dan Berpengalaman</p>
                           </div>
                           <div className="w-[90%] flex justify-start items-center gap-1 md:gap-2 kiri">
                              <FaCheck color="#00FF00"/>
                              <p>Khitan Super Ring : Tanpa Nyeri, Minim Rasa Sakit</p>
                           </div>
                           <div className="w-[90%] flex justify-start items-center gap-1 md:gap-2 kiri">
                              <FaCheck color="#00FF00"/>
                              <p>Prosedur Steril</p>
                           </div>
                              <a href="https://wa.me/+6282273212907" target="blank">
                                 <div className="my-3 px-3 lg:px-10 py-2 xl:py-3 text-xs lg:text-base kiri flex justify-between items-center gap-3  bg-green-600 shadow-md rounded-md kiri">
                                       <p className="tracking-wider text-[12px] lg:text-sm text-white kontak z-10">
                                          Hubungi Kami
                                       </p>
                                    <ArrowRight size={25} weight="thin" />
                                 </div>
                              </a>
                        </div>
                     </div>
                     
                  </div>
                  {/* 2 */}
                  <div className="w-2/3  lg:w-full h-full flex justify-end items-end absolute bottom-0 right-0 kanan ">
                     <img
                        src={rijal}
                        alt=""
                        className="h-[25rem] md:h-full  object-cover opacity-90 "
                     />
                  </div>
               </div>

               {/* layanan kami */}
               <div className="flex flex-wrap justify-center items-center gap-3 md:gap-10 lg:gap-10 py-5 lg:py-10 text-black">
                  <div className="w-14 h-20 md:w-24 md:h-28 lg:w-[10rem] lg:h-40 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:border-biru overflow-hidden cursor-pointer layanan">
                     <LiaClipboardListSolid size={size} />
                     <p className="text-[10px] lg:text-base">Booking</p>
                  </div>
                  <div className="w-14 h-20 md:w-24 md:h-28 lg:w-[10rem] lg:h-40 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:border-biru overflow-hidden cursor-pointer layanan">
                     <MdMarkChatRead size={size} />
                     <p className="text-[10px] lg:text-base">Konsultasi</p>
                  </div>
                  <div className="w-14 h-20 md:w-24 md:h-28 lg:w-[10rem] lg:h-40 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:border-biru overflow-hidden cursor-pointer layanan">
                     <RiHealthBookFill size={size} />
                     <p className="text-[10px] lg:text-base">MCU</p>
                  </div>
                  <div className="w-14 h-20 md:w-24 md:h-28 lg:w-[10rem] lg:h-40 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:border-biru overflow-hidden cursor-pointer layanan">
                     <RxScissors size={size} />
                     <p className="text-[10px] lg:text-base">Khitan</p>
                  </div>
                  <div className="w-14 h-20 md:w-24 md:h-28 lg:w-[10rem] lg:h-40 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:border-biru overflow-hidden cursor-pointer layanan">
                     <GiMedicines size={size} />
                     <p className="text-[10px] lg:text-base">Rawat Luka</p>
                  </div>
               </div>
            </div>
         </div>

         {/* free shipping */}
         <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5 py-5 text-black ">
            {/* 1 */}
            <div className="flex justify-start lg:justify-center items-center gap-3 w-[170px] lg:w-[20rem] speciality">
               <PiSyringe size={size} color="#2abbdf" weight="duotone" />
               <div>
                  
                  <p className="font-semibold text-sm lg:text-xl ">
                     Tanpa Suntik
                  </p>
                  <p className="text-[12px] lg:text-sm text-gray-400">
                     Sembuh Lebih Cepat
                  </p>
               </div>
            </div>

            {/* 2 */}
            <div className="flex justify-start lg:justify-center items-center gap-3 w-[170px] lg:w-[20rem] speciality">
               <PiHeadsetThin size={size} color="#2abbdf" weight="duotone" />
               <div>
                  <p className="font-semibold text-sm lg:text-xl">
                     Online Support
                  </p>
                  <p className="text-[12px] lg:text-sm text-gray-400">
                     Melayani 24 jam
                  </p>
               </div>
            </div>

            {/* 3 */}
            <div className="flex justify-start lg:justify-center items-center gap-3 w-[170px] lg:w-[20rem] speciality">
               <PiStethoscopeThin
                  size={size}
                  color="#2abbdf"
                  weight="duotone"
               />
               <div>
                  <p className="font-semibold text-sm lg:text-xl ">Maksimal</p>
                  <p className="text-[12px] lg:text-sm text-gray-400">
                     Melayani dengan Hati
                  </p>
               </div>
            </div>

            {/* 3 */}
            <div className="flex justify-start lg:justify-center items-center gap-3 w-[170px] lg:w-[20rem] speciality">
               <CiTimer size={size} color="#2abbdf" weight="duotone" />
               <div>
                  <p className="font-semibold text-sm lg:text-xl">Responsif</p>
                  <p className="text-[12px] lg:text-sm text-gray-400">
                     Penanganan Cepat
                  </p>
               </div>
            </div>
         </div>

         {/* why choose us */}
         <div className=" px-5 py-5 text-black mt-20">
               <div className="text-center w-full flex flex-col justify-center items-center gap-3 speciality ">
                  <h1 className="font-light text-sm tracking-widest">Selamat Datang di Rijal Homecare</h1>
                  <p className="font-bold text-lg md:text-2xl lg:text-4xl  text-biru">Kami Hadir dengan <span className="text-orange-500">Pelayanan Terbaik</span> untuk Anda</p>
                  <p className="w-full md:w-[90%] lg:w-[40%] text-sm lg:text-base">Layanan rawatan luka & khitan modern dengan komitmen memberikan solusi terbaik bagi kesehatan Anda</p>
               </div>
            {/* 1 */}
               <div className="px-2 md:px-10 xl:px-40 py-10 flex flex-wrap justify-center items-center gap-5 lg:gap-16">
                  {/* 1 */}
                  <div className="w-full md:w-96 flex justify-center items-center gap-5 speciality">
                     <Stethoscope  size={40} color="#2b84b1" weight="fill" />
                     <div className="w-full lg:w-72 flex flex-col justify-start items-start gap-1">                        
                        <p className="font-semibold text-sm md:text-base xl:text-lg">Tenaga Medis Berpengalaman</p>
                        <div className="w-12 h-[3px] rounded-full bg-orange-500"></div>
                        <p className="text-xs md:text-sm">Ditangani oleh perawat dan dokter profesional di bidang perawatan luka dan khitan</p>
                     </div>
                  </div>
                  {/* 1 */} 
                  <div className="w-96 flex justify-center items-center gap-5 speciality">
                     <Drop  size={50} color="#2b84b1" weight="fill" />
                     <div className="w-full md:w-72 flex flex-col justify-start items-start gap-1">                        
                        <p className="font-semibold text-sm md:text-base">Steril & Higienis</p>
                        <div className="w-12 h-[3px] rounded-full bg-orange-500"></div>
                        <p className="text-xs md:text-sm">Ditangani oleh perawat dan dokter profesional di bidang perawatan luka dan khitan</p>
                     </div>
                  </div>
                  {/* 1 */}
                  <div className="w-96 flex justify-center items-center gap-5 speciality">
                     <ClockCounterClockwise size={50} color="#2b84b1" weight="fill" />
                     <div className="w-full md:w-72 flex flex-col justify-start items-start gap-1">                        
                        <p className="font-semibold text-sm md:text-base">Konsultasi & Kontrol Berkala</p>
                        <div className="w-12 h-[3px] rounded-full bg-orange-500"></div>
                        <p className="text-xs md:text-sm">Ditangani oleh perawat dan dokter profesional di bidang perawatan luka dan khitan</p>
                     </div>
                  </div>
                  {/* 1 */}
                  <div className="w-96 flex justify-center items-center gap-5 speciality">
                     <HouseLine  size={45} color="#2b84b1" weight="fill" />
                     <div className="w-full md:w-72 flex flex-col justify-start items-start gap-1">                        
                        <p className="font-semibold text-sm md:text-base">Layanan Homecare</p>
                        <div className="w-12 h-[3px] rounded-full bg-orange-500"></div>
                        <p className="text-xs md:text-sm">Kami hadir langsung kerumah anda, Nyaman, efisien, dan tetap aman</p>
                     </div>
                  </div>
                  {/* 1 */}
                  <div className="w-96 flex justify-center items-center gap-5 speciality">
                     <FirstAidKit size={50} color="#2b84b1" weight="fill" />
                     <div className="w-full md:w-72 flex flex-col justify-start items-start gap-1">                        
                        <p className="font-semibold text-sm md:text-base">Pemulihan Lebih Optimal</p>
                        <div className="w-12 h-[3px] rounded-full bg-orange-500"></div>
                        <p className="text-xs md:text-sm">Dengan metode terkini dan pemantauan rutin, proses tindakan dan penyembuhan berlangsung lebih cepat</p>
                     </div>
                  </div>
                  {/* 1 */}
                  <div className="w-96 flex justify-center items-center gap-5 speciality">
                     <ShieldCheck size={50} color="#2b84b1" weight="fill" />
                     <div className="w-full md:w-72 flex flex-col justify-start items-start gap-1">                        
                        <p className="font-semibold text-sm md:text-base">Khitan Tanpa Suntik</p>
                        <div className="w-12 h-[3px] rounded-full bg-orange-500"></div>
                        <p className="text-xs md:text-sm">Khitan dengan Super Ring. Aman, nyaman, pulih lebih cepat tanpa rasa sakit</p>
                     </div>
                  </div>
                  
               </div>
            <div>
            </div>
         </div>

         {/* testimonial */}
         <div>
            <Testimonial />
         </div>

         {/* banner */}
         <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:px-10">
            {/* first banner */}
            <div className="w-full lg:w-[50%] p-5 text-white pilihKiri ">
               <div className="bg-biru rounded-xl px-5 lg:px-12 py-5 lg:py-10 flex flex-col justify-start items-start gap-3 bg-opacity-80 relative shadow-xl"
               >
                  <h2>Tahukah Kamu ?</h2>
                  <h1 className="text-lg lg:text-3xl font-semibold z-10">
                     SOLUSI TEPAT UNTUK
                     <span className="text-orange-500">PENYEMBUHAN LUKA</span>
                  </h1>
                  <p className="text-xs lg:text-base z-10">
                     Luka yang tidak di tangani dengan baik bisa beresiko infeksi
                     dan memperlambat proses penyembuhan
                  </p>
                  <button className="bg-orange-500 px-3 py-2 text-xs lg:text-sm text-white rounded-lg mt-3">
                     Selengkapnya
                  </button>
                  {/* gambar */}
                  <div className="absolute right-0 lg:-top-28 bottom-0 w-[42%] ">
                     <img
                        src="https://res.cloudinary.com/dplikeeby/image/upload/v1739855466/obat_ixcp8q.png"
                        alt=""
                     />
                  </div>
               </div>
            </div>

            {/* second banner */}
            <div className="w-full lg:w-[50%]  p-5 text-white pilihKanan">
               <div
                     className="bg-orange-500 rounded-xl px-5 lg:px-12 py-5 lg:py-10 flex flex-col justify-end items-end gap-3 shadow-lg bg-opacity-80 relative overflow-hidden bg-cover bg-no-repeat"
                     style={{ backgroundImage: `url(${excitedPerson})` }}
                  >
                  <h2>Metode Khitan Tanpa Jarum</h2>
                  <h1 className="text-lg text-right lg:text-3xl font-semibold">
                     Memperkenalkan Metode Khitan
                     <span className="text-biru"> Super Ring</span>
                  </h1>
                  <p className="text-xs lg:text-base z-10">
                     Takut jarum? Sekarang nggak perlu lagi! Dengan Metode Super
                           Ring, sunat jadi lebih nyaman tanpa suntikan, tanpa
                           jahitan, dan minim rasa sakit.
                  </p>
                  <button className="bg-biru px-3 py-2 text-xs lg:text-sm text-white rounded-lg mt-3">
                     Selengkapnya
                  </button>
                  {/* gambar */}
               </div>
            </div>
         </div>


         <div>
            <News />
         </div>
         {/* booking */}
         <div>
            <Booking />
         </div>

         {/* <div className="w-full ">
            <Maps />
         </div> */}
      </>
   );
};

export default Home;
