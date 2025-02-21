import React, { useEffect, useState } from "react";
import Line from "./Line";
import {
   PiHeadsetThin,
   PiHospitalThin,
   PiStethoscopeThin,
   PiSyringe,
} from "react-icons/pi";
import { FaBed } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import { MdMarkChatRead } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import { RxScissors } from "react-icons/rx";
import {
   FaFacebookF,
   FaInstagram,
   FaWhatsapp,
   FaLinkedin,
} from "react-icons/fa";
import rijal from "../assets/Image/rijall.png";
import excitedPerson from "../assets/Image/omg2.png";
import Footer from "./Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Testimonial from "./Testimonial";
import { CiTimer } from "react-icons/ci";
import Booking from "./Booking";

const Home = () => {
   const [size, setSize] = useState(0);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;

         if (width < 768) {
            setSize(20); // Untuk tampilan mobile
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
         { x: 0, opacity: 1, duration: 1.5, delay: 1, ease: "power1" }
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

      gsap.fromTo(
         ".layanan",
         { x: 50, opacity: 0 },
         {
            x: 0,
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
      gsap.fromTo(
         ".layananKiri",
         { x: -50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".layananKiri",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            ease: "power1.inOut",
         }
      );
      gsap.fromTo(
         ".layananKanan",
         { x: 50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".layananKanan",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            ease: "power1.inOut",
         }
      );

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
            },
            duration: 1,
            ease: "power1.inOut",
         }
      );
   }, []);

   return (
      <>
         <div className="  bg-warm overflow-hidden h-full relative">
            <div className="relative pt-14 lg:pt-20">
               {/* hero section */}
               <div className="border py-52 h-[20rem] lg:h-[55rem] w-full bg-gradient-to-r from-[#007c9d] to-white text-black flex justify-start items-center overflow-hidden relative">
                  <div className="absolute top-[3%] lg:top-[10%] translate-y-1/2 right-14 lg:right-[35%] z-10 ">
                     <h1 className="font-extrabold text-5xl lg:text-[10rem]  opacity-10">
                        HOME CARE
                     </h1>
                  </div>
                  {/* 1 */}
                  <div className=" max-w-[75%] h-full px-5 lg:px-28 flex flex-col justify-center items-start lg:gap-3">
                     <div className="flex justify-start items-center gap-2 homecare">
                        <Line />
                        <p>M Rijal</p>
                     </div>
                     <h1 className="font-bold text-4xl lg:text-8xl xl:text-[11rem] text-white homecare">
                        HomeCare
                     </h1>
                     <p className="text-xl lg:text-5xl font-semibold  kiri">
                        Layanan{" "}
                        <span className="text-orange-500">
                           Kesehatan Masyarakat
                        </span>
                     </p>
                     <p className="text-sm lg:text-2xl text-white  kiri">
                        Perawatan Terpercaya dirumah,Untuk Kesehatan Keluarga
                        Anda
                     </p>
                     <button className="px-3 py-2 lg:px-5 lg:py-3 mt-3 rounded-md text-sm lg:text-base  text-white bg-orange-500 kontak kiri">
                        Kontak saya
                     </button>
                     {/* social media */}
                     <div className="flex justify-start items-center gap-3 py-5 text-zinc-800 text-base lg:text-2xl">
                        <h1>Find me in</h1>
                        <a href="#">
                           <FaFacebookF size={20} />
                        </a>
                        <a href="#">
                           <FaInstagram size={20} />
                        </a>
                        <a href="#">
                           <FaWhatsapp size={20} />
                        </a>
                        <a href="#">
                           <FaLinkedin size={20} />
                        </a>
                     </div>
                  </div>
                  {/* 2 */}
                  <div className="w-full h-full flex justify-end items-end absolute top-0 left-0 kanan">
                     <img
                        src={rijal}
                        alt=""
                        className="w-80 lg:w-[60rem] object-cover opacity-60"
                     />
                  </div>
               </div>

               {/* layanan kami */}
               <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 py-10 text-black">
                  <div className="w-[6rem] lg:w-[12rem] h-32 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer layanan">
                     <LiaClipboardListSolid size={size} />
                     <p className="text-[12px] lg:text-base">Booking Jadwal</p>
                  </div>
                  <div className="w-[6rem] lg:w-[12rem] h-32 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer layanan">
                     <MdMarkChatRead size={size} />
                     <p className="text-[12px] lg:text-base">Konsultasi</p>
                  </div>
                  <div className="w-[6rem] lg:w-[12rem] h-32 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer layanan">
                     <RiHealthBookFill size={size} />
                     <p className="text-[12px] lg:text-base">Check up</p>
                  </div>
                  <div className="w-[6rem] lg:w-[12rem] h-32 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer layanan">
                     <RxScissors size={size} />
                     <p className="text-[12px] lg:text-base">Layanan Khitan</p>
                  </div>
                  <div className="w-[6rem] lg:w-[12rem] h-32 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer layanan">
                     <GiMedicines size={size} />
                     <p className="text-[12px] lg:text-base">Rawat Luka</p>
                  </div>
               </div>
            </div>
         </div>

         {/* free shipping */}
         <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5 py-5 text-black ">
            {/* 1 */}
            <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] speciality">
               <PiSyringe size={size} color="#2abbdf" weight="duotone" />
               <div>
                  <p className="font-semibold text-sm lg:text-2xl">
                     Tanpa Suntik
                  </p>
                  <p className="text-[12px] lg:text-lg text-gray-500">
                     All card Accepted
                  </p>
               </div>
            </div>

            {/* 2 */}
            <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] speciality">
               <PiHeadsetThin size={size} color="#2abbdf" weight="duotone" />
               <div>
                  <p className="font-semibold text-sm lg:text-2xl">
                     Online Support
                  </p>
                  <p className="text-[12px] lg:text-lg text-gray-500">
                     Melayani 24 jam
                  </p>
               </div>
            </div>

            {/* 3 */}
            <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] speciality">
               <PiStethoscopeThin
                  size={size}
                  color="#2abbdf"
                  weight="duotone"
               />
               <div>
                  <p className="font-semibold text-sm lg:text-2xl">Maksimal</p>
                  <p className="text-[12px] lg:text-lg text-gray-500">
                     Melayani dengan Hati
                  </p>
               </div>
            </div>

            {/* 3 */}
            <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] speciality">
               <CiTimer size={size} color="#2abbdf" weight="duotone" />
               <div>
                  <p className="font-semibold text-sm lg:text-2xl">Responsif</p>
                  <p className="text-[12px] lg:text-lg text-gray-500">
                     Penanganan Cepat
                  </p>
               </div>
            </div>
         </div>

         {/* why choose us */}
         <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10  px-5  py-10 lg:pb-32 text-black">
            {/* 1 */}
            <div className="flex flex-col justify-start items-start gap-5 lg:gap-10 lg:max-w-[40%] py-10 kiri text-sm lg:text-base pilihKiri">
               <h1 className="text-xl lg:text-3xl font-bold">
                  Mengapa Pilih Kami ?
               </h1>
               <Line />
               <p>
                  Kami hadir untuk memberikan perawatan terbaik bagi ibu dan
                  bayi, dengan layanan profesional, nyaman, dan penuh kasih
                  sayang langsung di rumah Anda{" "}
               </p>
               <div>
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
            <div className="w-full lg:w-[35rem] h-full flex justify-end items-end relative flex-col-reverse gap-10 pilihKanan">
               <img
                  src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_54-1.jpg"
                  alt=""
                  className="w-full object-cover rounded-md"
               />
               {/* absolute div */}
               <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:absolute lg:bottom-5 lg:-left-96 px-10 py-10 w-full lg:w-auto h-full lg:h-52 bg-biru text-white">
                  {/* 1 */}
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-2 ">
                     <PiHospitalThin size={80} />
                     <div className="flex flex-col justify-center items-center lg:items-start gap-1">
                        <p className="text-2xl lg:text-2xl">100+</p>
                        <p className="text-sm lg:text-xl">
                           STATISFIED PATIENTS{" "}
                        </p>
                     </div>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                     <FaBed size={80} />
                     <div className="flex flex-col justify-center items-center lg:items-start gap-1">
                        <p className="text-2xl lg:text-2xl">256++ </p>
                        <p className="text-sm lg:text-xl">CLINICS OF BEDS </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* testimonial */}
         <div>
            <Testimonial />
         </div>

         {/* banner */}
         <div className="w-full px-5  py-10 lg:px-[10%] text-white">
            <div
               className="bg-biru rounded-xl px-5 lg:px-28 py-5 lg:py-28 flex flex-col justify-start items-start gap-3 shadow-lg bg-opacity-80 relative"
               // style={{
               //    backgroundImage: `url(https://img.freepik.com/free-photo/view-medicine-blue-background_23-2149341571.jpg?t=st=1739951318~exp=1739954918~hmac=74472508729df09e0fdb0309dee3f2a2f9efdf5c658abd90c1e1856d3084734c&w=1380)`,
               //    backgroundSize: "cover",
               //    backgroundPosition: "center",
               // }}
            >
               <h2>Tahukah Kamu ?</h2>
               <h1 className="text-lg lg:text-6xl font-semibold max-w-[60%]">
                  SOLUSI TEPAT UNTUK
                  <span className="text-orange-500">PENYEMBUHAN LUKA</span>
               </h1>
               <p className="text-[12px] lg:text-xl max-w-[70%] z-10">
                  Luka yang tidak di tangani dengan baik bisa beresiko infeksi
                  dan memperlambat proses penyembuhan
               </p>
               <button className="bg-orange-500 px-5 py-3 text-white rounded-lg mt-3">
                  Read More
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
         <div className="w-full px-5  lg:px-[10%] text-white">
            <div
               className="bg-orange-500 rounded-xl px-5 lg:px-28 py-5 lg:py-28 flex flex-col justify-end items-end gap-3 shadow-lg bg-opacity-80 relative overflow-hidden bg-cover bg-no-repeat"
               style={{ backgroundImage: `url(${excitedPerson})` }}
            >
               <div className=" flex flex-col justify-start items-start gap-3 w-full text-left max-w-[60%] z-10 ">
                  <h1 className="text-lg lg:text-6xl font-semibold ">
                     METODE KHITAN TANPA SUNTIK
                     <span className="text-biru">SUPER RING</span>
                  </h1>
                  <p className="text-[12px] lg:text-xl">
                     Takut jarum? Sekarang nggak perlu lagi! Dengan Metode Super
                     Ring, sunat jadi lebih nyaman tanpa suntikan, tanpa
                     jahitan, dan minim rasa sakit.
                  </p>
                  <button className="bg-biru px-5 py-3 text-white rounded-lg mt-3">
                     Read More
                  </button>
               </div>
               {/* gambar */}
               {/* <div className="absolute left-0 lg:-top-28 bottom-0 inset-0 ">
                  <img
                     src={excitedPerson}
                     alt=""
                     className="w-[70%] lg:w-[30%]"
                  />
               </div> */}
            </div>
         </div>

         {/* booking */}
         <div>
            <Booking />
         </div>
      </>
   );
};

export default Home;
