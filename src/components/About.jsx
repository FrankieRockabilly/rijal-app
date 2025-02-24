import React, { useEffect } from "react";
import Line from "./Line";

const About = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <div className="pb-10 pt-28 px-5 lg:px-40 text-black">
            <div className="flex flex-col justify-center items-center gap-6 py-10">
               <h1 className="text-center text-2xl lg:text-3xl font-bold ">
                  Tentang Saya
               </h1>
               <Line />
            </div>
            {/* min h screen */}
            <div className=" flex flex-col lg:flex-row justify-start items-start gap-10">
               {/* 1 */}
               <div className="w-full lg:w-[40%] h-[30rem] overflow-hidden rounded-lg">
                  <img
                     src="https://res.cloudinary.com/dplikeeby/image/upload/v1740124767/www_wgkiuq.jpg"
                     alt=""
                     className="w-full h-auto object-cover"
                  />
               </div>

               {/* 2 */}
               <div className="w-full lg:w-[50%]">
                  <div className="w-full flex flex-col justify-start items-start gap-7">
                     <p>Tentang Saya</p>
                     <h1 className="font-bold text-2xl xl:text-4xl">
                        We Are Providing Best Service Since 2001 to Pesent
                     </h1>
                     <hr className="border border-green-400 w-52" />
                     <p className="text-sm lg:text-base ">
                        Kami telah memberikan layanan perawatan kesehatan
                        terbaik sejak tahun 2001 hingga saat ini. Sebagai
                        penyedia layanan homecare profesional, kami fokus pada
                        perawatan medis di rumah yang aman dan nyaman. Dengan
                        komitmen untuk memberikan layanan yang cepat, responsif,
                        dan penuh perhatian, kami memastikan setiap pasien
                        mendapatkan perhatian terbaik di rumah mereka. Kami
                        hadir untuk membantu Anda dan keluarga dengan solusi
                        perawatan kesehatan yang praktis dan efekti
                     </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-start items-start gap-5 w-full mt-5">
                     <div className="">
                        <h2 className="text-base lg:text-2xl font-bold">
                           Layanan Responsif
                        </h2>
                        <p className="text-[12px] lg:text-base ">
                           Kami memastikan setiap kebutuhan medis Anda ditangani
                           dengan responsif, memberikan perhatian yang cepat dan
                           tepat di kenyamanan rumah Anda
                        </p>
                     </div>
                     <div>
                        <h2 className="text-base lg:text-2xl font-bold">
                           Perawatan Tanngap
                        </h2>
                        <p className="text-[12px] lg:text-base ">
                           Tim kami siap memberikan perawatan tanggap setiap
                           saat, memberikan dukungan medis yang cepat dan
                           terpercaya di rumah Anda
                        </p>
                     </div>
                     <div>
                        <h2 className="text-base lg:text-2xl font-bold">
                           Segera dan Profesional
                        </h2>
                        <p className="text-[12px] lg:text-base ">
                           Kami selalu siap memberikan tindakan segera dengan
                           pendekatan profesional untuk setiap kebutuhan medis
                           di rumah Anda
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* tulisan dibawah */}
            <div className="px-5 lg:px-40 py-20 ">
               <div className="flex justify-center items-center gap-5">
                  <hr className="bg-gray-600 w-full" />
                  <h2 className="text-center py-5 uppercase min-w-64">
                     Some of my latest work
                  </h2>
                  <hr className="bg-gray-900 w-full" />
               </div>

               {/* flex */}
               <div className="flex flex-wrap justify-center items-center gap-5">
                  {/* 1 item */}
                  <div className="p-2 rounded-lg w-[28rem] h-80 border shadow-lg flex flex-col">
                     <div className="h-[70%] overflow-hidden rounded-lg">
                        <img
                           src="https://cdn.dribbble.com/userupload/19352939/file/original-cdf4609e53dab8edfdcb542df4e78f84.png?resize=1024x768&vertical=center"
                           alt=""
                        />
                     </div>
                     <div className="grow text-black font-light flex flex-col justify-center items-start">
                        <h1 className="text-base lg:text-xl">
                           My UI Design Book
                        </h1>
                        <p>Book</p>
                     </div>
                  </div>

                  {/* 2 item */}
                  <div className="p-2 rounded-lg w-[28rem] h-80 border shadow-lg flex flex-col">
                     <div className="h-[70%] overflow-hidden rounded-lg">
                        <img
                           src="https://cdn.dribbble.com/userupload/17809728/file/original-bc83ad96f0203cbd5765a5ad51d6a848.jpeg?resize=1024x768&vertical=center"
                           alt=""
                        />
                     </div>
                     <div className="grow text-black font-light flex flex-col justify-center items-start">
                        <h1 className="text-base lg:text-xl">
                           Creating a lean design system
                        </h1>
                        <p>Book</p>
                     </div>
                  </div>

                  {/* 3 item */}
                  <div className="p-2 rounded-lg w-[28rem] h-80 border shadow-lg flex flex-col">
                     <div className="h-[70%] overflow-hidden rounded-lg">
                        <img
                           src="https://cdn.dribbble.com/userupload/16496243/file/original-e1ecffbf36f7ad411b8940e410d7914e.png?resize=1024x768&vertical=center"
                           alt=""
                        />
                     </div>
                     <div className="grow text-black font-light flex flex-col justify-center items-start">
                        <h1 className="text-base lg:text-xl">
                           My UI Design Book
                        </h1>
                        <p>Book</p>
                     </div>
                  </div>
                  {/* 4 item */}
                  <div className="p-2 rounded-lg w-[28rem] h-80 border shadow-lg flex flex-col">
                     <div className="h-[70%] overflow-hidden rounded-lg">
                        <img
                           src="https://cdn.dribbble.com/userupload/16496243/file/original-e1ecffbf36f7ad411b8940e410d7914e.png?resize=1024x768&vertical=center"
                           alt=""
                        />
                     </div>
                     <div className="grow text-black font-light flex flex-col justify-center items-start">
                        <h1 className="text-base lg:text-xl">
                           My UI Design Book
                        </h1>
                        <p>Book</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default About;
