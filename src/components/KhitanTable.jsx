import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ErrorTambahObat from "../notification/ErrorTambahObat";
import SuccessTambahObat from "../notification/SuccessTambahObat";

const KhitanTable = () => {
   const navigate = useNavigate();

   const [khitan, setKhitan] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [konfirmasi, setKonfirmasi] = useState(false);
   const [selectedId, setSelectedId] = useState();
   const [isResepActive, setIsResepActive] = useState(null); // Menyimpan id baris yang aktif untuk resep\\

   const [obatId, setObatId] = useState(null);
   const [keterangan, setKeterangan] = useState();
   const [jumlah, setJumlah] = useState();

   const [successTambahObatAlert, setSuccessTambahObatAlert] = useState(false);
   const [errMessage, setErrorMessage] = useState(false);

   // daftar booking khitan
   const getDataKhitan = async () => {
      const response = await axios.get("http://localhost:5000/bookingkhitan");
      console.log(response.data);
      setKhitan(response.data);
   };

   const filteredKhitan = useMemo(() => {
      return khitan.filter(
         (items) =>
            items.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            items.status.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
   });

   // obat
   const [dataObat, setDataObat] = useState([]);
   const getdataObat = async () => {
      const response = await axios.get("http://localhost:5000/obat");
      // console.log("data obat =>", response.data);
      setDataObat(response.data);
   };
   useEffect(() => {
      getdataObat();
   }, []);

   const handleKonfirmasiLayanan = (id) => {
      setSelectedId(id);
      setKonfirmasi(true);
   };

   const handleSetujuKonfirmasi = async () => {
      if (selectedId) {
         try {
            const response = await axios.patch(
               `http://localhost:5000/bookingKhitan/${selectedId}`
            );
            console.log(response);
            setKonfirmasi(false);
            getDataKhitan();
         } catch (error) {
            console.log(error);
         }
      }
   };

   const handleClickTambahObat = async (booking_id) => {
      try {
         const response = await axios.post(
            `http://localhost:5000/resepKhitan/${booking_id}`,
            {
               obat_id: obatId,
               keterangan: keterangan,
               jumlah: jumlah,
            }
         );
         // console.log(response);
         setSuccessTambahObatAlert(true);
         setTimeout(() => {
            setSuccessTambahObatAlert(false);
         }, 1000);
         setTimeout(() => {
            setObatId(null);
            setKeterangan(null);
            setJumlah(null);
         }, 2000);
      } catch (error) {
         // console.log(error.response.data);
         setErrorMessage(true);
         setTimeout(() => {
            setErrorMessage(false);
         }, 1000);
      }
   };

   const handleClickLihatRiwayatObat = (id) => {
      navigate(`/adminDashboard/riwayatObat/${id}`, {
         state: { id },
      });
   };

   const handleResepKhitan = (id) => {
      setIsResepActive(id);
      // console.log("booking id =>", id);
   };

   useEffect(() => {
      getDataKhitan();
   }, []);

   return (
      <>
         <div className="px-10 xl:px-[2%] py-5 h-full">
            {successTambahObatAlert && <SuccessTambahObat />}
            {errMessage && <ErrorTambahObat />}

            <div className="flex justify-between items-center ">
               <h1 className="text-xl font-bold text-gray-500 py-5">
                  Data Khitan
               </h1>
               <input
                  type="text"
                  className="border bg-white outline-none rounded-md p-3 w-80"
                  placeholder="Cari berdasarkan nama atau  status"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>

            <div className="overflow-x-auto pb-32">
               <table className="table border rounded-3xl text-gray-500 font-poppins text-sm">
                  <thead>
                     <tr className="font-semibold text-black">
                        <th>No</th>
                        <th>Name</th>
                        <th>Usia Anak</th>
                        <th>No Hp</th>
                        <th>Alergi</th>
                        <th className="text-center">Status</th>
                        <th className="flex justify-center items-center">
                           Aksi
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {filteredKhitan?.map((value, index) => {
                        return (
                           <tr
                              key={index}
                              className={
                                 index % 2 === 0 ? "bg-gray-100" : "bg-white"
                              }
                           >
                              <td>{index + 1}</td>
                              <td>{value.name}</td>
                              <td>{value.usia}</td>
                              <td>{value.no_hp}</td>
                              <td>{value.alergi}</td>
                              <td>
                                 {value.status === "pending" ? (
                                    <p className="text-center bg-gray-300 px-2 py-1 rounded-xl">
                                       {value.status}
                                    </p>
                                 ) : (
                                    <div className="flex justify-center items-center gap-2 text-center bg-green-100 border text-green-500 px-2 py-1 rounded-xl">
                                       <FaCheck />
                                       {value.status}
                                    </div>
                                 )}
                              </td>
                              <td>
                                 <div className="flex justify-center items-center gap-3 relative">
                                    <button
                                       className="px-3 py-2 rounded-md bg-biru text-white"
                                       onClick={() =>
                                          handleResepKhitan(value.id)
                                       }
                                    >
                                       Beri Resep
                                    </button>

                                    <button
                                       className={`w-20 py-2 rounded-md bg-hijau text-white ${
                                          value.status == "terlayani"
                                             ? "cursor-not-allowed pointer-events-none"
                                             : ""
                                       }`}
                                       onClick={() =>
                                          handleKonfirmasiLayanan(value.id)
                                       }
                                    >
                                       {value.status == "terlayani" ? (
                                          <div className="flex justify-center items-center">
                                             <FaCheckCircle size={17} />
                                          </div>
                                       ) : (
                                          "Selesai"
                                       )}
                                    </button>

                                    {/* lihat riwayat obat */}

                                    <button
                                       className="p-2 bg-orange-500 rounded-md text-white"
                                       onClick={() =>
                                          handleClickLihatRiwayatObat(value.id)
                                       }
                                    >
                                       detail
                                    </button>

                                    {/* Modal Konfirmasi Selesai */}
                                    {konfirmasi && selectedId === value.id && (
                                       <div className="absolute top-10 left-0 w-auto h-auto bg-opacity-80 backdrop-blur-sm bg-gray-400 flex justify-center items-center rounded-xl z-50">
                                          <div className="text-base p-7 rounded-lg bg-transparent text-white">
                                             <h1>Konfirmasi Selesai?</h1>
                                             <div className="flex justify-start items-center gap-5 mt-5">
                                                <button
                                                   onClick={() =>
                                                      setKonfirmasi(false)
                                                   }
                                                   className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-800"
                                                >
                                                   Tidak
                                                </button>
                                                <button
                                                   onClick={() =>
                                                      handleSetujuKonfirmasi(
                                                         selectedId
                                                      )
                                                   }
                                                   className="px-4 py-2 rounded-lg bg-hijau hover:bg-green-600"
                                                >
                                                   Ya
                                                </button>
                                             </div>
                                          </div>
                                       </div>
                                    )}

                                    {/* Tampilkan pesan resep hanya jika id cocok */}
                                    {isResepActive === value.id && (
                                       <div className="absolute top-10 right-56  h-auto border bg-white z-20 w-96">
                                          <div className="p-5 flex flex-col justify-start items-start gap-3 ">
                                             <div className="flex justify-between items-center w-full">
                                                <p>Input Pemberian Obat</p>
                                                <button
                                                   onClick={() =>
                                                      setIsResepActive(false)
                                                   }
                                                >
                                                   x
                                                </button>
                                             </div>
                                             {/* <div>
                                                <h2>Obat dimasukkan</h2>
                                                <div className="flex justify-start items-center gap-2">
                                                   <p>obat1</p>
                                                   <p>obat1</p>
                                                </div>
                                             </div> */}
                                             <div className="p-3 bg-gray-200 rounded-md flex flex-col justify-start items-start gap-4 w-full">
                                                <div className="flex flex-col justify-start items-start gap-2 w-full ">
                                                   <label>
                                                      Input Data Obat
                                                   </label>

                                                   <select
                                                      className="bg-white outline-none rounded-md p-3 w-full text-black "
                                                      onChange={(e) =>
                                                         setObatId(
                                                            e.target.value
                                                         )
                                                      }
                                                   >
                                                      {dataObat.map(
                                                         (value, index) => {
                                                            return (
                                                               <option
                                                                  key={index}
                                                                  value={
                                                                     value.id
                                                                  }
                                                                  placeholder="silahkan masukkan obat"
                                                               >
                                                                  {
                                                                     value.nama_obat
                                                                  }
                                                               </option>
                                                            );
                                                         }
                                                      )}
                                                   </select>
                                                   <div className="flex flex-col justify-start items-start gap-3 mt-2 w-full">
                                                      <input
                                                         type="number"
                                                         className="bg-white px-3 py-2 rounded-md outline-none text-black w-full"
                                                         placeholder="jumlah"
                                                         value={jumlah}
                                                         onChange={(e) =>
                                                            setJumlah(
                                                               e.target.value
                                                            )
                                                         }
                                                      />
                                                      <input
                                                         type="text"
                                                         className="bg-white px-3 py-2 rounded-md outline-none text-black w-full"
                                                         placeholder="masukkkan keterangan"
                                                         value={keterangan}
                                                         onChange={(e) =>
                                                            setKeterangan(
                                                               e.target.value
                                                            )
                                                         }
                                                      />
                                                      <button
                                                         className="bg-biru  px-3 py-2 rounded-md text-white"
                                                         onClick={() =>
                                                            handleClickTambahObat(
                                                               value.id
                                                            )
                                                         }
                                                      >
                                                         tambah
                                                      </button>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    )}
                                 </div>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};

export default KhitanTable;
