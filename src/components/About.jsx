import { useEffect } from "react";
import Line from "./Line";
import rijalAbout from '../assets/Image/rijalAbout.png'

const About = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <div className="pb-10 pt-14 md:pt-28  px-5 lg:px-40 text-black">
            <div>
               <div className="lg:my-16 flex flex-col justify-start items-center  gap-6">
                  <h1 className="text-center text-2xl lg:text-3xl font-semibold ">
                     Tentang Saya
                  </h1>
                  <Line />
               </div>
               <div className=" flex flex-col lg:flex-row justify-start items-start gap-10">
                  {/* 1 */}
                  <div className="w-full lg:w-[40%] h-[30rem] overflow-hidden shadow-md rounded-lg">
                     <img
                        src={rijalAbout}
                        alt=""
                        className="w-full h-auto object-cover"
                     />
                  </div>

                  {/* 2 */}
                  <div className="w-full lg:w-[70%]">
                     <div className="w-full flex flex-col justify-start items-start gap-7 ">
                        <h2 className="font-semibold text-2xl xl:text-4xl">
                           Kami memberikan pelayanan kesehatan terbaik sejak
                           2001 hingga sekarang
                        </h2>
                        <hr className="border border-green-400 w-52" />
                        <p className="text-sm lg:text-base indent-20">
                           Kami telah memberikan layanan perawatan kesehatan
                           terbaik sejak tahun 2001 hingga saat ini. Sebagai
                           penyedia layanan homecare profesional, kami fokus
                           pada perawatan medis di rumah yang aman dan nyaman.
                           Dengan komitmen untuk memberikan layanan yang cepat,
                           responsif, dan penuh perhatian, kami memastikan
                           setiap pasien mendapatkan perhatian terbaik di rumah
                           mereka. Kami hadir untuk membantu Anda dan keluarga
                           dengan solusi perawatan kesehatan yang praktis dan
                           efekti
                        </p>
                     </div>
                     <div className="flex flex-col lg:flex-row justify-start items-start gap-5 w-full mt-5">
                        <div className="">
                           <h2 className="text-base lg:text-2xl font-semibold">
                              Layanan Responsif
                           </h2>
                           <p className="text-[12px] lg:text-base ">
                              Kami memastikan setiap kebutuhan medis Anda
                              ditangani dengan responsif, memberikan perhatian
                              yang cepat dan tepat di kenyamanan rumah Anda
                           </p>
                        </div>
                        <div>
                           <h2 className="text-base lg:text-2xl font-semibold">
                              Perawatan Tanggap
                           </h2>
                           <p className="text-[12px] lg:text-base ">
                              Tim kami siap memberikan perawatan tanggap setiap
                              saat, memberikan dukungan medis yang cepat dan
                              terpercaya di rumah Anda
                           </p>
                        </div>
                        <div>
                           <h2 className="text-base lg:text-2xl font-semibold">
                              Segera dan Profesional
                           </h2>
                           <p className="text-[12px] lg:text-base ">
                              Kami selalu siap memberikan tindakan segera dengan
                              pendekatan profesional untuk setiap kebutuhan
                              medis di rumah Anda
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default About;
