import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RiwayatObat = () => {
   const location = useLocation()
   const {id} = location.state || {}
   const[nama, setNama] = useState('')
   const[usia, setUsia] = useState('')
   const[resepObatKhitan, setResepObatKhitan] = useState([])
   
   const getDataBooking = async()=>{
      try {
         const response = await axios.get(`http://localhost:5000/bookingKhitan/${id}`)
         // console.log(response.data)
         setNama(response.data.name)
         setUsia(response.data.usia)
      } catch (error) {
         console.log(error);
      }
   }

   const getResepByBooking = async()=>{
      try {
         const data = await axios.get(`http://localhost:5000/resepKhitan/${id}`)
         // console.log(`obat id nya =>`, data.data.map(items => items.obat_id))
         console.log('data nya' ,data.data);
         setResepObatKhitan(data.data)
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(()=>{
      getResepByBooking()
   },[])

   

   useEffect(()=>{
      getDataBooking()
   },[])
   return (
      <>
         <div className=" h-full text-black px-10 xl:px-[2%] py-5">
         <div className="h-48 border-2 bg-biru text-white py-12 rounded-3xl w-full p-10 hidden xl:block relative overflow-hidden bg-cover">
               <h1 className="text-5xl font-semibold tracking-wide">
                  Selamat datang di Rijal Homecare.{" "}
               </h1>
               <p>Riwayat Obat</p>
            </div>
            <div className="p-5">
               <div className="py-2 font-semibold">
                <h1>Nama : {nama} </h1>
                <h1>Usia : {usia ? usia : '-'} </h1>
               </div>
               <div>
                  <h2>Resep Diberikan : </h2>
                  <div className="border rounded-lg p-5 flex justify-start items-start gap-4">
                     <div>
                        {resepObatKhitan.map((value, index)=>{
                           return(
                           <div key={index}>
                              <p>{value.nama_obat} </p>
                           </div>
                           )
                        })}
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   );
};

export default RiwayatObat;
