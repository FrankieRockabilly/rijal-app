import axios from "axios";
import React, { useEffect, useState } from "react";

const KhitanTable = () => {
    const [khitan, setKhitan] = useState([]);

    const getDataKhitan = async () => {
        const response = await axios.get('http://localhost:5000/bookingkhitan');
        console.log(response.data);
        setKhitan(response.data);
    };

    useEffect(() => {
        getDataKhitan();
    }, []);

    return (
        <>
            <div className="px-10 xl:px-[2%] py-5">
                <div className="border-2 bg-birumuda text-white py-12 rounded-3xl w-full p-10 hidden xl:block">
                    <h1 className="text-3xl font-semibold tracking-wide">Selamat datang di Rijal Homecare. </h1>
                    <p>Berikut adalah data pelayanan Khitan Super Ring</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-500 py-5">Data Khitan</h1>
                </div>

                <div className="overflow-x-auto pb-32">
                    <table className="table border rounded-3xl text-gray-900 font-poppins text-[12px]">
                        {/* head */}
                        <thead>
                            <tr className="font-semibold text-black">
                                <th>No</th>
                                <th>Name</th>
                                <th>NIK</th>
                                <th>Nama Orang Tua</th>
                                <th>Tanggal Lahir</th>
                                <th>Email</th>
                                <th>Tanggal Booking</th>
                                <th>Jam Pelaksanaan</th>
                                <th>Alamat</th>
                                <th>No Hp</th>
                                <th>Alergi</th>
                                <th>Status</th>
                                <th className="flex justify-center items-center">Aksi</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {khitan?.map((value, index) => {
                                return (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                        <td>{index + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.nik}</td>
                                        <td>{value.nama_orangtua}</td>
                                        <td>{value.tanggal_lahir}</td>
                                        <td>{value.email}</td>
                                        <td>{value.tanggal}</td>
                                        <td>{value.jam_pelaksanaan}</td>
                                        <td>{value.alamat}</td>
                                        <td>{value.no_hp}</td>
                                        <td>{value.alergi}</td>
                                        <td>{value.status}</td>
                                        <td className="flex justify-center items-center gap-3">
                                            <button className="px-3 py-2 rounded-md bg-hijau text-white"> Set</button>
                                            <button className="px-3 py-2 rounded-md bg-red-600 text-white"> Delete</button>
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
