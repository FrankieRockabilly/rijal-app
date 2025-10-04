import React, { useEffect, useState } from "react";
import Line from "./Line";
import {
   PiHeadsetThin,
   PiHospitalThin,
   PiStethoscopeThin,
   PiSyringe,
} from "react-icons/pi";

// icons
import { ArrowUpRight } from "@phosphor-icons/react";
import { FaBed,FaWhatsapp  } from "react-icons/fa";
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
               start: "top 80%",
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
                        <p className="text-[9px] lg:text-sm">Ns. Muhammad Rijal, S. Kep</p>
                     </div>
                     <h1 className="font-bold text-4xl lg:text-8xl xl:text-[11rem] text-white homecare">
                        Home Care
                     </h1>
                     <p className="text-xl lg:text-5xl font-semibold  kiri">
                        Layanan{" "}
                        <span className="text-orange-500">
                           Kesehatan Masyarakat
                        </span>
                     </p>
                     <p className="text-[11px] lg:text-2xl w-72  lg:w-[30rem] text-white  kiri">
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
                                 <div className="my-3 px-3 lg:px-10 py-2 text-xs lg:text-base kiri flex justify-between items-center gap-3  bg-green-600 shadow-md rounded-md kiri">
                                       <p className="tracking-wider text-[12px] text-white kontak z-10">
                                          Hubungi Kami
                                       </p>
                                    <ArrowUpRight size={25} weight="thin" />
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
                        className="w-72 lg:w-[40rem] object-cover opacity-90"
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
         <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10  px-5 lg:py-10 lg:pb-32 text-black border">
            {/* 1 */}
            <div className="flex flex-col justify-start items-start gap-5 lg:gap-7 lg:max-w-[40%] py-10 kiri text-sm lg:text-base pilihKiri">
               <div className="flex flex-col justify-start items-start gap-5">
                  <h1 className="text-xl lg:text-3xl font-bold">
                     Mengapa Pilih Kami ?
                  </h1>
                  <Line />
               </div>
               <p className="text-[12px] lg:text-base">
                  Kami hadir untuk memberikan perawatan terbaik, dengan layanan profesional, nyaman, untuk memberikan pelayanan kesehatan yang terbaik
               </p>
               <div className="text-[12px] lg:text-base">
                  <div className="flex justify-start items-center gap-2">
                     <div className="w-2 h-2 rounded-full border-2 border-green-600"></div>
                     <p>Pelayanan Profesional</p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                     <div className="w-2 h-2 rounded-full border-2 border-green-600"></div>
                     <p>Perawatan dirumah tanpa harus keluar</p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                     <div className="w-2 h-2 rounded-full border-2 border-green-600"></div>
                     <p>Respon Cepat</p>
                  </div>
               </div>
               <button className="px-5 py-3 bg-biru text-white hover:bg-sky-800">
                  Selengkapnya
               </button>
            </div>

            {/* 2 */}
            <div className="w-full lg:w-[35rem] h-full lg:h-[28rem] flex justify-end items-end relative flex-col-reverse gap-10 pilihKanan">
               <img
                  src="https://res.cloudinary.com/dplikeeby/image/upload/v1740838564/12_brz7bq.jpg"
                  alt="homecare"
                  className="w-full h-full object-cover rounded-md "
               />
               {/* absolute div */}
               {/* <div className="hidden xl:flex flex-col lg:flex-row justify-around items-center gap-10 lg:absolute lg:bottom-5 lg:-left-96 px-10 py-10 w-full lg:w-auto h-full lg:h-52 bg-biru text-white ">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                     <PiHospitalThin size={80} />
                     <div className="flex flex-col justify-center items-center lg:items-start gap-1">
                        <p className="text-2xl lg:text-2xl">100+</p>
                        <p className="text-sm lg:text-xl">
                           PASIEN PUAS{" "}
                        </p>
                     </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                     <FaBed size={80} />
                     <div className="flex flex-col justify-center items-center lg:items-start gap-1">
                        <p className="text-2xl lg:text-2xl">256++ </p>
                        <p className="text-sm lg:text-xl">KHITAN SUPER NYAMAN</p>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>

         {/* testimonial */}
         <div>
            <Testimonial />
         </div>

         {/* banner */}
         <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:px-10">
            {/* first banner */}
            <div className="w-full lg:w-[50%] p-5 text-white pilihKanan ">
               <div className="bg-biru rounded-xl px-5 lg:px-12 py-5 lg:py-10 flex flex-col justify-start items-start gap-3 bg-opacity-80 relative shadow-xl"
               >
                  <h2>Tahukah Kamu ?</h2>
                  <h1 className="text-lg lg:text-3xl font-semibold">
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
