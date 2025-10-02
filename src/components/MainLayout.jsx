import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // CSS untuk styling kalender
import SuccessSubmitPerawatan from "../assets/modal/SuccessSubmitPerawatan";
import BookingKhitanSuccess from "../notification/BookingKhitanSuccess";
import Loading from "./Loading";
import axios from "axios";

const MainLayout = () => {
   const [loadingHalamanAwal, setLoadingHalamanAwal] = useState(true);
   useEffect(() => {
      const timer = setTimeout(() => {
         setLoadingHalamanAwal(false);
      }, 1500);

      return () => clearTimeout(timer);
   });

   const [nameRawat, setNameRawat] = useState("");
   const [emailRawat, setEmailRawat] = useState("");
   const [alamatRawat, setAlamatRawat] = useState("");
   const [tanggalRawat, setTanggalRawat] = useState("");
   const changeTanggalRawat = (date) => {
      setTanggalRawat(date);
   };
   const [hpRawat, setHpRawat] = useState("");
   const [pelayananRawat, setPelayananRawat] = useState("");
   const [gambarLuka, setGambarLuka] = useState("");
   const [deskripsi, setDeskripsi] = useState("");
   const [successSubmitPerawatan, setSuccesSubmitPerawatan] = useState(false);

   // BOOKING KHITAN
   const [nama, setNama] = useState("");
   const [usia, setUsia] = useState("");
   const [alamat, setAlamat] = useState("");
   const [tanggal, setTanggal] = useState("");
   const changeTanggal = (date) => {
      setTanggal(date);
   };
   const [hp, setHp] = useState("");
   const [ortu, setOrtu] = useState("");
   const [alergi, setAlergi] = useState("");
   const [tanggalLahir, setTanggalLahir] = useState("");
   const [jamPelaksanaan, setJamPelaksanaan] = useState("");
   const [successBookingKhitan, setSuccessBookingKhitan] = useState(false);

   // rawatan luka
   const [bookingPerawatan, setIsBookingPerawatan] = useState(false);
   const [bookingKhitan, setIsBookingKhitan] = useState(false);

   const bookingPerawatanRef = useRef(null);
   const bookingKhitanRef = useRef(null);

   const [loading, setLoading] = useState(false);
   // booking perawatan
   const clickBookingPerawatan = () => {
      setIsBookingPerawatan((state) => !state);
      console.log(bookingPerawatan);
   };

   // booking khitan
   const clickBookingKhitan = () => {
      setIsBookingKhitan((prevState) => !prevState);
   };

   const submitBookingKhitan = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const response = await axios.post(
            "http://localhost:5000/bookingKhitan",
            {
               nama: nama,
               usia: usia,
               tanggalLahir: tanggalLahir,
               namaOrtu: ortu,
               tanggal: tanggal,
               jamPelaksanaan: jamPelaksanaan,
               alamat: alamat,
               noHp: hp,
               alergi: alergi,
            }
         );
         console.log(response.data);
         setSuccessBookingKhitan(true);
         setTimeout(() => {
            setSuccessBookingKhitan(false);
         }, 3000);

         // hapus semua isi field data inputan
         setLoading(false);
         setNama("");
         setUsia("");
         setTanggalLahir("");
         setOrtu("");
         setTanggal("");
         setJamPelaksanaan("");
         setAlamat("");
         setHp("");
         setAlergi("");
      } catch (error) {
         console.log(error.response);
         setLoading(false);
      }
   };

   const submitBookingPerawatan = (e) => {
      e.preventDefault();
      alert(`telah dikirim `);
   };

   // klik di luar area form
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            bookingPerawatanRef.current &&
            !bookingPerawatanRef.current.contains(event.target)
         ) {
            setIsBookingPerawatan(false);
         }
         if (
            bookingKhitanRef.current &&
            !bookingKhitanRef.current.contains(event.target)
         ) {
            setIsBookingKhitan(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <>
         {loadingHalamanAwal ? (
            <div className="h-screen flex justify-center items-center bg-zinc-100 ">
               <span className="loading loading-ring loading-lg bg-biru"></span>
            </div>
         ) : (
            // notifikasi sukse booking
            <div className="w-full bg-warm font-poppins relative h-full overflow-hidden">
               {successBookingKhitan && <BookingKhitanSuccess />}
               {successSubmitPerawatan && <SuccessSubmitPerawatan />}
               <div>
                  <Header />
               </div>
               <Outlet />

               <div>
                  <Footer />
               </div>

               {/* whatsapp */}
               <div className="flex lg:flex-col justify-center items-center gap-0 w-full lg:w-auto lg:gap-5 fixed bottom-0 lg:bottom-5 right-0 lg:right-5 z-20 ">
                  <button
                     className="w-full lg:w-64 text-center text-[12px] lg:text-base bg-biru text-white px-3 py-4 lg:rounded-md shadow-lg hover:text-black transition-all"
                     onClick={clickBookingPerawatan}
                  >
                     Booking Jadwal Perawatan
                  </button>
                  <button
                     className="w-full lg:w-64 text-center text-[12px] lg:text-base bg-orange-500 text-white px-3 py-4 lg:rounded-md shadow-lg hover:text-black transition-all"
                     onClick={clickBookingKhitan}
                  >
                     Booking Jadwal Khitan
                  </button>

                  {/* booking perawatan */}
                  {bookingPerawatan && (
                     <div className=" shadow-xl">
                        <div
                           ref={bookingPerawatanRef}
                           className="fixed bottom-0 lg:bottom-3 right-0 lg:right-3 w-full lg:w-96  bg-white  lg:rounded-lg shadow-xl text-[12px] lg:text-base overflow-y-auto max-h-[80vh] border"
                        >
                           <div className="text-white bg-biru w-full px-3 py-3 lg:rounded-t-lg flex justify-between items-center">
                              <p>Booking Perawatan Luka</p>
                              <button
                                 className="px-5"
                                 onClick={() => setIsBookingPerawatan(false)}
                              >
                                 x
                              </button>
                           </div>
                           <div className="px-3 py-3 text-gray-600 flex flex-col justify-start items-start gap-5">
                              <p>Please Input this field below</p>
                              <form
                                 className="flex flex-col justify-start items-start gap-3 w-full"
                                 onSubmit={submitBookingPerawatan}
                              >
                                 <div className="w-full">
                                    <label htmlFor="">
                                       Masukkan Nama Lengkap
                                    </label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Nama Lengkap"
                                       value={nameRawat}
                                       onChange={(e) =>
                                          setNameRawat(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Masukan Email</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Email"
                                       value={emailRawat}
                                       onChange={(e) =>
                                          setEmailRawat(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Masukkan Alamat</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Alamat"
                                       value={alamatRawat}
                                       onChange={(e) =>
                                          setAlamatRawat(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">
                                       Masukkan No Hp AKtif
                                    </label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="No Hp"
                                       value={hpRawat}
                                       onChange={(e) =>
                                          setHpRawat(e.target.value)
                                       }
                                       required
                                    />
                                 </div>

                                 <div className="w-full">
                                    <label>Pilih Layanan</label>
                                    <select
                                       className="outline-none px-3 py-3 rounded-lg w-full border border-gray-300 focus:border-orange-500 bg-white"
                                       required
                                       value={pelayananRawat}
                                       onChange={(e) =>
                                          setPelayananRawat(e.target.value)
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
                                    <label htmlFor="">Upload gambar luka</label>
                                    <input
                                       type="file"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="No Hp"
                                       value={gambarLuka}
                                       onChange={(e) =>
                                          setGambarLuka(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Deskripsi Luka</label>
                                    <textarea
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Deskripsi Luka"
                                       value={deskripsi}
                                       onChange={(e) =>
                                          setDeskripsi(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">
                                       Pilih Tanggal Layanan
                                    </label>
                                    <DatePicker
                                       id="tanggalLayanan"
                                       selected={tanggalRawat} // Menampilkan tanggal yang dipilih
                                       onChange={changeTanggalRawat} // Fungsi untuk menangani perubahan
                                       dateFormat="yyyy-MM-dd" // Format tanggal yang ditampilkan
                                       placeholderText="Pilih Tanggal Layanan"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
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
                                       onClick={() =>
                                          setIsBookingPerawatan(false)
                                       }
                                    >
                                       Close
                                    </button>
                                    <button
                                       type="submit"
                                       className={`w-32 py-3 rounded-md bg-biru text-white hover:bg-orange-700 ${
                                          loading ? "cursor-not-allowed" : ""
                                       }`}
                                    >
                                       {loading ? (
                                          <span className="loading loading-spinner loading-xs"></span>
                                       ) : (
                                          "Submit"
                                       )}
                                    </button>
                                 </div>
                              </form>
                              {/* end form */}
                           </div>
                        </div>
                     </div>
                  )}

                  {/* klik menu booking */}
                  {bookingKhitan && (
                     <div className=" border border-white shadow-xl">
                        <div
                           ref={bookingKhitanRef}
                           className="fixed bottom-0 lg:bottom-3 right-0 lg:right-3 w-full lg:w-96  bg-white  lg:rounded-lg shadow-xl text-[12px] lg:text-base overflow-y-auto max-h-[80vh] "
                        >
                           <div className=" w-full h-full px-3 py-3 text-white flex justify-between items-center bg-orange-500  lg:rounded-t-lg">
                                 <p>Booking Layanan Khitan</p>
                                 <button
                                    className="px-5"
                                    onClick={() => setIsBookingKhitan(false)}
                                 >
                                    x
                                 </button>
                           </div>
                           <div className="px-3 py-3 text-gray-600 flex flex-col justify-start items-start gap-5">
                              <p>Please Input this field below</p>
                              <form
                                 className="flex flex-col justify-start items-start gap-3 w-full"
                                 onSubmit={submitBookingKhitan}
                              >
                                 <div className="w-full">
                                    <label htmlFor="">
                                       Masukkan Nama Lengkap
                                    </label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Nama Lengkap"
                                       value={nama}
                                       onChange={(e) => setNama(e.target.value)}
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Usia</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Usia anak"
                                       value={usia}
                                       onChange={(e) => setUsia(e.target.value)}
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Tanggal Lahirr</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Tanggal Lahir"
                                       value={tanggalLahir}
                                       onChange={(e) =>
                                          setTanggalLahir(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Nama Orang Tua</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Nama Orang Tua"
                                       value={ortu}
                                       onChange={(e) => setOrtu(e.target.value)}
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
                                       onChange={(e) =>
                                          setAlamat(e.target.value)
                                       }
                                       required
                                    />
                                 </div>

                                 <div className="w-full">
                                    <label htmlFor="">
                                       Masukkan No Hp AKtif
                                    </label>
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
                                    <label htmlFor="">
                                       Pilih Tanggal Layanan
                                    </label>
                                    <DatePicker
                                       id="tanggalLayanan"
                                       selected={tanggal} // Menampilkan tanggal yang dipilih
                                       onChange={changeTanggal} // Fungsi untuk menangani perubahan
                                       dateFormat="yyyy-MM-dd" // Format tanggal yang ditampilkan
                                       placeholderText="dd/mm/yy"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white cursor-pointer"
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Jam Pelaksanaan</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Jam booking"
                                       value={jamPelaksanaan}
                                       onChange={(e) =>
                                          setJamPelaksanaan(e.target.value)
                                       }
                                       required
                                    />
                                 </div>
                                 <div className="w-full">
                                    <label htmlFor="">Alergi Obat</label>
                                    <input
                                       type="text"
                                       className="outline-none px-3 py-3 rounded-lg w-full border focus:border-orange-500 bg-white"
                                       placeholder="Masukkan alergi obat"
                                       value={alergi}
                                       onChange={(e) =>
                                          setAlergi(e.target.value)
                                       }
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
                                       onClick={() => setIsBookingKhitan(false)}
                                    >
                                       Close
                                    </button>
                                    <button
                                       type="submit"
                                       className="px-5 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-700 "
                                    >
                                       {loading ? (
                                          <span className="loading loading-spinner loading-xs"></span>
                                       ) : (
                                          "Submit"
                                       )}
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
         )}
      </>
   );
};

export default MainLayout;
