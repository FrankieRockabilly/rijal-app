import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [alamat, setAlamat] = useState("");
   const [hp, setHp] = useState("");
   const [pelayanan, setPelayana] = useState("");
   const [bookingAppointment, setIsBookingAppointment] = useState(false);

   const clickBookingAppointment = () => {
      setIsBookingAppointment((prevState) => !prevState);
   };

   const closeBookingAppointment = () => {
      setIsBookingAppointment(false);
   };

   const submitBookingAppointment = (e) => {
      e.preventDefault();
      alert(`telah dikirim : ${pelayanan}`);
   };

   // Menambahkan event listener untuk mendeteksi klik di luar ikon WhatsApp

   return (
      <>
         <div className="w-full bg-warm font-poppins relative h-full overflow-hidden">
            <div>
               <Header />
            </div>
            <Outlet />

            {/* whatsapp */}
            <div className="flex lg:flex-col justify-center items-center gap-0 w-full lg:w-auto lg:gap-5 fixed bottom-0 lg:bottom-5 right-0 lg:right-5 z-20 ">
               <p className="w-full lg:w-52 text-center text-sm lg:text-base bg-biru text-white px-3 py-4 lg:rounded-md shadow-lg cursor-pointer hover:text-black transition-all">
                  Book Health Check-up
               </p>
               <p
                  className="w-full lg:w-52 text-center text-sm lg:text-base bg-orange-500 text-white px-3 py-4 lg:rounded-md shadow-lg cursor-pointer hover:text-black transition-all"
                  onClick={clickBookingAppointment}
               >
                  Book Appointment
               </p>
               {/* klik menu booking */}
               {bookingAppointment && (
                  <div className="fixed bottom-0 lg:bottom-3 right-0 lg:right-3 w-full lg:w-96 h-[37rem] bg-white  lg:rounded-lg shadow-xl">
                     <p className="text-white bg-orange-500 w-full px-3 py-3 lg:rounded-t-lg">
                        Booking Pelayanan
                     </p>
                     <div className="px-3 py-3 text-gray-600 flex flex-col justify-start items-start gap-5">
                        <p className="py-3">Please Input this field below</p>
                        <form
                           className="flex flex-col justify-start items-start gap-5 w-full"
                           onSubmit={submitBookingAppointment}
                        >
                           <input
                              type="text"
                              className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                              placeholder="Nama"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                           />
                           <input
                              type="email"
                              className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                           />
                           <input
                              type="text"
                              className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                              placeholder="Alamat"
                              value={alamat}
                              onChange={(e) => setAlamat(e.target.value)}
                              required
                           />
                           <input
                              type="text"
                              className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                              placeholder="No Hp"
                              value={hp}
                              onChange={(e) => setHp(e.target.value)}
                              required
                           />
                           <select
                              className="outline-none px-3 py-3 rounded-lg w-full border border-gray-300 focus:border-orange-500 bg-white"
                              required
                              value={pelayanan}
                              onChange={(e) => setPelayana(e.target.value)}
                           >
                              <option value="" disabled selected>
                                 Pilih Pelayanan
                              </option>
                              <option value="konsultasi">Konsultasi</option>
                              <option value="khitan">Layanan Khitan</option>
                              <option value="perawatanLuka">
                                 Pemeriksaan Luka
                              </option>
                           </select>
                           <div className="flex justify-start items-center gap-2">
                              <input
                                 type="checkbox"
                                 className="checkbox bg-white w-6 h-6"
                              />
                              <p>
                                 I Agree{" "}
                                 <span className="text-biru">
                                    To The Terms & Conditions
                                 </span>
                              </p>
                           </div>
                           <div className="flex justify-end items-center gap-5 w-full">
                              <button
                                 className="px-5 py-3 rounded-md bg-zinc-500 text-white hover:bg-zinc-700 "
                                 onClick={closeBookingAppointment}
                              >
                                 Close
                              </button>
                              <button
                                 type="submit"
                                 className="px-5 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-700 "
                              >
                                 Submit
                              </button>
                           </div>
                        </form>
                        {/* end form */}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default MainLayout;
