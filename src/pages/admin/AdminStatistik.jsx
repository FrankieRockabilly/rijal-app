import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineMedicineBox } from "react-icons/ai";

const AdminStatistik = () => {
   const[totalKhitan, setTotalKhitan] = useState(0)
   const[khitanTerlayani, setKhitanTerlayani] = useState(0)
   const[khitanPending, setKhitanPending] = useState(0)

   const getTotalBookingKhitan = async()=>{
      try {
         const response = await axios.get(`http://localhost:5000/bookingkhitan`)
         setTotalKhitan(response.data.length)
         setKhitanTerlayani(response.data.filter(items => items.status == 'terlayani').length)
         setKhitanPending(response.data.filter(items => items.status =='pending').length)
         console.log(response.data.length)
       
      } catch (error) {
         console.log(error)
      }
   }

   

   useEffect(()=>{
      getTotalBookingKhitan()
   },[])

   return (
      <>
         <div className="px-10 xl:px-[2%] py-5">
         <div
               className="h-48 border-2 bg-biru text-white py-12 rounded-3xl w-full p-10 hidden xl:block relative overflow-hidden bg-cover"
               // style={{
               //    backgroundImage:
               //       "url(https://res.cloudinary.com/dplikeeby/image/upload/v1742915480/ornament_xzeoyo.png)",
               // }}
            >
               <h1 className="text-5xl font-semibold tracking-wide ">
                  Selamat datang di Rijal Homecare.{" "}
               </h1>
               <p>Berikut adalah data pelayanan Khitan Super Ring</p>
            </div>

            {/* contecnt */}
            <div className="flex justify-between items-start gap-10 py-8 text-black font-poppins">
               {/* 1 */}
               <div className="border rounded-lg w-full flex justify-start items-start gap-10 p-10">
                  <div className="w-80 h-96 border rounded-lg">
                     <img
                        src="https://img.freepik.com/free-photo/hand-with-rubber-glove-holding-medical-scalpel_23-2149299266.jpg?t=st=1742803270~exp=1742806870~hmac=3a9b88066332fd81663d3117c3bb04e84a2ae23aaac0363ba645ae4624b62164&w=996"
                        alt=""
                        className="object-cover w-full h-full"
                     />
                  </div>
                  <div className="flex flex-col justify-normal items-start gap-3">
                     <div className="pb-3 border-b-[1px] border-gray-200">
                        <h2 className="font-semibold text-xl ">
                           Statistik Data Khitan Modern
                        </h2>
                        <p className="text-gray-400">Khitan Super Ring</p>
                     </div>

                     <div className="flex flex-col justify-start items-start gap-10">
                        <div className="flex justify-start items-start gap-2">
                           <AiOutlineMedicineBox size={25}/>
                           <div className="">
                              <h1 className="font-semibold">
                              Total Booking Khitan
                              </h1>
                              <p>{totalKhitan} </p>
                           </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                           <AiOutlineMedicineBox size={25}/>
                           <div className="">
                              <h1 className="font-semibold">
                                 Total Pasien Terlayani
                              </h1>
                              <p>{khitanTerlayani} </p>
                           </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                           <AiOutlineMedicineBox size={25}/>
                           <div className="">
                              <h1 className="font-semibold">
                              Total Pasien Pending
                              </h1>
                              <p>{khitanPending} </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>


               {/* perawatan luka */}
               <div className="border rounded-lg w-full flex justify-start items-start gap-10 p-10">
                  <div className="w-80 h-96 border rounded-lg">
                     <img
                        src="https://img.freepik.com/free-photo/closeup-shot-best-man-helping-groom-button-cufflinks-wedding-day-concep_181624-46046.jpg?t=st=1742803681~exp=1742807281~hmac=d0ec087c642a9a8598b6e9b00ed855c6d45b2b850935937fcd626205e847a7df&w=996"
                        alt=""
                        className="object-cover w-full h-full"
                     />
                  </div>
                  <div className="flex flex-col justify-normal items-start gap-3">
                     <div className="pb-3 border-b-[1px] border-gray-200">
                        <h2 className="font-semibold text-xl ">
                           Statistik Data Perawatan Luka
                        </h2>
                        <p className="text-gray-400">Perawatan luka mandiri</p>
                     </div>

                     <div className="flex flex-col justify-start items-start gap-10">
                        <div className="flex justify-start items-start gap-2">
                           <AiOutlineMedicineBox size={25}/>
                           <div className="">
                              <h1 className="font-semibold">
                              Total Riwayat Perawatan
                              </h1>
                              <p>352</p>
                           </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                           <AiOutlineMedicineBox size={25}/>
                           <div className="">
                              <h1 className="font-semibold">
                                 Total Pasien Terlayani
                              </h1>
                              <p>399</p>
                           </div>
                        </div>
                        <div className="flex justify-start items-start gap-2">
                           <AiOutlineMedicineBox size={25}/>
                           <div className="">
                              <h1 className="font-semibold">
                              Total Pasien Pending
                              </h1>
                              <p>93</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
};

export default AdminStatistik;
