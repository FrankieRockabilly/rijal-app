import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [alamat, setAlamat] = useState("");
   const [tanggal, setTanggal] = useState("");
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

   useEffect(() => {
      if (bookingAppointment) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }

      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, [bookingAppointment]);

   return (
      <>
         <div className="w-full bg-warm font-poppins relative h-full overflow-hidden">
            <div>
               <Header />
            </div>
            <Outlet />

            <div>
               <Footer />
            </div>

            {/* whatsapp */}
            <div className="flex lg:flex-col justify-center items-center gap-0 w-full lg:w-auto lg:gap-5 fixed bottom-0 lg:bottom-5 right-0 lg:right-5 z-20 ">
               <p className="w-full lg:w-64 text-center text-sm lg:text-base bg-biru text-white px-3 py-4 lg:rounded-md shadow-lg cursor-pointer hover:text-black transition-all">
                  Booking Jadwal Perawatan
               </p>
               <p
                  className="w-full lg:w-64 text-center text-sm lg:text-base bg-orange-500 text-white px-3 py-4 lg:rounded-md shadow-lg cursor-pointer hover:text-black transition-all"
                  onClick={clickBookingAppointment}
               >
                  Booking Jadwal Khitan
               </p>
               {/* klik menu booking */}
               {bookingAppointment && (
                  <div className=" border border-green-700 ">
                     <div className="fixed bottom-0 lg:bottom-3 right-0 lg:right-3 w-full lg:w-96  bg-white  lg:rounded-lg shadow-xl text-[12px] lg:text-base">
                        <p className="text-white bg-orange-500 w-full px-3 py-3 lg:rounded-t-lg">
                           Booking Pelayanan
                        </p>
                        <div className="px-3 py-3 text-gray-600 flex flex-col justify-start items-start gap-5">
                           <p className="py-3">Please Input this field below</p>
                           <form
                              className="flex flex-col justify-start items-start gap-5 w-full"
                              onSubmit={submitBookingAppointment}
                           >
                              <div className="w-full">
                                 <label htmlFor="">Masukkan Nama Lengkap</label>
                                 <input
                                    type="text"
                                    className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                    placeholder="Nama Lengkap"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                 />
                              </div>
                              <div className="w-full">
                                 <label htmlFor="">Masukan Email</label>
                                 <input
                                    type="email"
                                    className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                 />
                              </div>
                              <div className="w-full">
                                 <label htmlFor="">Masukkan Alamat</label>
                                 <input
                                    type="text"
                                    className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                    placeholder="Alamat"
                                    value={alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                    required
                                 />
                              </div>
                              <div className="w-full">
                                 <label htmlFor="">Masukkan No Hp AKtif</label>
                                 <input
                                    type="text"
                                    className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                    placeholder="No Hp"
                                    value={hp}
                                    onChange={(e) => setHp(e.target.value)}
                                    required
                                 />
                              </div>

                              <div className="w-full">
                                 <label>Pilih Layanan</label>
                                 <select
                                    className="outline-none px-3 py-3 rounded-lg w-full border border-gray-300 focus:border-orange-500 bg-white"
                                    required
                                    value={pelayanan}
                                    onChange={(e) =>
                                       setPelayana(e.target.value)
                                    }
                                 >
                                    <option value="" disabled selected>
                                       Pilih Pelayanan
                                    </option>
                                    <option value="konsultasi">
                                       Konsultasi
                                    </option>
                                    <option value="khitan">
                                       Layanan Khitan
                                    </option>
                                    <option value="perawatanLuka">
                                       Pemeriksaan Luka
                                    </option>
                                 </select>
                              </div>
                              <div className="w-full">
                                 <label htmlFor="">Pilih Tanggal Layanan</label>
                                 <input
                                    type="date"
                                    className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                    placeholder="Pilih Tanggal Layanan"
                                    value={tanggal}
                                    onChange={(e) => setTanggal(e.target.value)}
                                    required
                                 />
                              </div>
                              <div className="flex justify-start items-center gap-2">
                                 <input
                                    type="checkbox"
                                    className="checkbox bg-white w-6 h-6"
                                    required
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
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default MainLayout;
