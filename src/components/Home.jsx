import React, { useEffect, useState } from "react";
import Header from "./Header";
import Line from "./Line";
import { PiHospitalThin } from "react-icons/pi";
import { FaBed } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import { MdMarkChatRead } from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import {
   FaFacebookF,
   FaInstagram,
   FaWhatsapp,
   FaLinkedin,
} from "react-icons/fa";
import {
   Syringe,
   Headset,
   Stethoscope,
   UsersFour,
   Hospital,
} from "@phosphor-icons/react";
import rijal from "../assets/Image/rjl.png";
import Footer from "./Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Testimonial from "./Testimonial";

const Home = () => {
   const [size, setSize] = useState(0);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;

         if (width < 768) {
            setSize(76); // Untuk tampilan mobile
         } else if (width >= 768 && width < 1024) {
            setSize(100); // Untuk tampilan tablet
         } else {
            setSize(150); // Untuk tampilan desktop
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
         ".tanpaSuntik",
         { x: 50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".tanpaSuntik",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            ease: "power1.inOut",
         }
      );
      gsap.fromTo(
         ".online",
         { x: 50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".online",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            delay: 0.5,
            ease: "power1.inOut",
         }
      );
      gsap.fromTo(
         ".maksimal",
         { x: 50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".maksimal",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            delay: 1,
            ease: "power1.inOut",
         }
      );
      gsap.fromTo(
         ".stetosokop",
         { x: 50, opacity: 0 },
         {
            x: 0,
            opacity: 1,
            scrollTrigger: {
               trigger: ".stetosokop",
               start: "top 80%",
               scrub: false,
            },
            duration: 1,
            delay: 1.5,
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
         <div className="  bg-white overflow-hidden h-full relative">
            <div>
               <Header />
            </div>

            <div className="relative pt-20">
               
               {/* hero section */}
               <div className=" h-[20rem] lg:h-[55rem] w-full bg-gradient-to-r from-[#007c9d] to-white text-black flex justify-start items-center overflow-hidden relative">
			   <div className="absolute top-[3%] lg:top-[10%] translate-y-1/2 right-14 lg:right-[35%] z-10 ">
                  <h1 className="font-extrabold text-5xl lg:text-[10rem]  opacity-10">
                     HOME CARE
                  </h1>
               </div>
                  {/* 1 */}
                  <div className=" max-w-[75%] h-full px-5 lg:px-28 flex flex-col justify-center items-start lg:gap-3">
                     <h1 className="font-bold text-4xl lg:text-8xl xl:text-[11rem] text-white homecare">
                        HomeCare
                     </h1>
                     <p className="text-xl lg:text-5xl font-semibold layanan kiri">
                        Layanan{" "}
                        <span className="text-orange-500">
                           Kesehatan Masyarakat
                        </span>
                     </p>
                     <p className="text-sm lg:text-2xl text-white layanan kiri">
                        Perawatan Terpercaya dirumah,Untuk Kesehatan Keluarga
                        Anda
                     </p>

                     <button className="px-3 py-2 lg:px-5 lg:py-3 mt-3 rounded-md text-sm lg:text-base  text-white bg-orange-500 kontak kiri">
                        Kontak saya
                     </button>
                  </div>
                  {/* 2 */}
                  <div className="w-full h-full flex justify-end items-end absolute top-0 left-0 kanan">
                     <img
                        src={rijal}
                        alt=""
                        className="w-52 lg:w-[35rem] object-cover opacity-60"
                     />
                  </div>
               </div>

               {/* layanan kami */}
               <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 py-10 text-black">
                     <div className="w-[10rem] lg:w-[12rem] h-44 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer">
                        <LiaClipboardListSolid size={50} />
                        <p>Booking Jadwal</p>
                     </div>
                     <div className="w-[10rem] lg:w-[12rem] h-44 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer">
                        <MdMarkChatRead size={50} />
                        <p>Konsultasi</p>
                     </div>
                     <div className="w-[10rem] lg:w-[12rem] h-44 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer">
                        <RiHealthBookFill size={50} />
                        <p>Check up</p>
                     </div>
                     <div className="w-[10rem] lg:w-[12rem] h-44 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer">
                        <GiMedicines size={50} />
                        <p>Beli Obat</p>
                     </div>
                     <div className="w-[10rem] lg:w-[12rem] h-44 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer">
                        <GiMedicines size={50} />
                        <p>Rawat Luka</p>
                     </div>
                     <div className="w-[10rem] lg:w-[12rem] h-44 lg:h-48 text-center rounded-lg flex flex-col justify-center items-center gap-2 shadow-md border p-3 hover:bg-gradient-to-r from-[#007c9d] to-green-300 cursor-pointer">
                        <GiMedicines size={50} />
                        <p>Lainnya</p>
                     </div>
                  </div>

               
            </div>
         </div>

         {/* why choose us */}
         <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10  bg-white px-5  py-10 lg:pb-32 text-black'>
				{/* 1 */}
				<div className='flex flex-col justify-start items-start gap-5 lg:gap-10 lg:max-w-[40%] py-10 kiri text-sm lg:text-base'>
					<h1 className='text-xl lg:text-3xl font-bold'>Mengapa Pilih Kami ?</h1>
					<p>Kami hadir untuk memberikan perawatan terbaik bagi ibu dan bayi, dengan layanan profesional, nyaman, dan penuh kasih sayang langsung di rumah Anda </p>
					<div>
						<div className='flex justify-start items-center gap-2'>
							<div className='w-2 h-2 rounded-full border-2 border-green-600'></div>
							<p>Pelayanan Profesional</p>
						</div>
						<div className='flex justify-start items-center gap-2'>
							<div className='w-2 h-2 rounded-full border-2 border-green-600'></div>
							<p>Perawatan dirumah tanpa harus keluar</p>
						</div>
						<div className='flex justify-start items-center gap-2'>
							<div className='w-2 h-2 rounded-full border-2 border-green-600'></div>
							<p>Respon Cepat</p>
						</div>
					</div>
					<button className='px-5 py-3 bg-biru text-white hover:bg-sky-800'>Selengkapnya</button>

				</div>

				{/* 2 */}
				<div className='w-full lg:w-[35rem] h-full flex justify-end items-end relative flex-col-reverse gap-10 kanan'  >
					<img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_54-1.jpg" alt="" className='w-full object-cover rounded-md'/>
					{/* absolute div */}
					<div className='flex flex-col lg:flex-row justify-around items-center gap-10 lg:absolute lg:bottom-5 lg:-left-96 px-10 py-10 w-full lg:w-auto h-full lg:h-52 bg-biru text-white'>
						{/* 1 */}
						<div className='flex flex-col lg:flex-row justify-center items-center gap-2 '>
							<PiHospitalThin size={80}/>
							<div className='flex flex-col justify-center items-center lg:items-start gap-1'>
								<p className='text-2xl lg:text-2xl'>100+</p>
								<p className='text-sm lg:text-xl'>STATISFIED PATIENTS </p>
							</div>
						</div>
						{/* 2 */}
						<div className='flex flex-col lg:flex-row justify-center items-center gap-2'>
						<FaBed size={80} />
							<div className='flex flex-col justify-center items-center lg:items-start gap-1'>
								<p className='text-2xl lg:text-2xl'>256++ </p>
								<p className='text-sm lg:text-xl'>CLINICS OF BEDS </p>
							</div>
						</div>
					</div>
				</div>
		</div>

		{/* free shipping */}
		<div className="flex flex-wrap justify-center items-center gap-2 lg:gap-5 py-10 lg:py-24 text-black">
                  {/* 1 */}
                  <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] tanpaSuntik">
                     <Syringe size={40} color="#2abbdf" weight="duotone" />
                     <div>
                        <p className="font-semibold text-base lg:text-3xl">
                           Tanpa Suntik
                        </p>
                        <p className="text-[12px] lg:text-xl">
                           All card Accepted
                        </p>
                     </div>
                  </div>

                  {/* 2 */}
                  <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] online">
                     <Headset size={40} color="#2abbdf" weight="duotone" />
                     <div>
                        <p className="font-semibold text-base lg:text-3xl">
                           Online Support
                        </p>
                        <p className="text-[12px] lg:text-xl">
                           Melayani 24 jam
                        </p>
                     </div>
                  </div>

                  {/* 3 */}
                  <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] maksimal">
                     <Stethoscope size={40} color="#2abbdf" weight="duotone" />
                     <div>
                        <p className="font-semibold text-base lg:text-3xl">
                           Maksimal
                        </p>
                        <p className="text-[12px] lg:text-xl">
                           Melayani dengan Hati
                        </p>
                     </div>
                  </div>

                  {/* 3 */}
                  <div className="flex justify-start items-center gap-2 lg:gap-8 w-[170px] lg:w-[20rem] stetosokop">
                     <Stethoscope size={40} color="#2abbdf" weight="duotone" />
                     <div>
                        <p className="font-semibold text-base lg:text-3xl">
                           Maksimal
                        </p>
                        <p className="text-[12px] lg:text-xl">
                           Melayani dengan Hati
                        </p>
                     </div>
                  </div>
               </div>

         {/* testimonial */}
         <div>
            <Testimonial />
         </div>

         <div>
            <Footer />
         </div>
      </>
   );
};

export default Home;
