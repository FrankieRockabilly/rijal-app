import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const KhitanContent = () => {


    const [activeMenu, setActiveMenu] = useState('Tentang Super Ring')
    const menuLayananItem = ['Tentang Super Ring' , 'Keunggulan Super Ring', 'Promo & Diskon',  'Testimoni Pasien' , 'Booking Jadwal', 'FAQ & Tips Kesehatan']


    return (
        <>
        <div className='flex justify-start items-start gap-20'>
            <div className="flex flex-col justify-start items-start gap-5">
                {menuLayananItem.map((item)=>(
                    <button onClick={()=>setActiveMenu(item)} 
                    className={activeMenu === item ? "text-biru" : "hover:text-biru"}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* konten */}
            <div className="flex justify-start items-start gap-40">
                {/* <RawatanContent /> */}
                <div>
                    Ini adalah isi dari konten menurut judul layanans
                </div>
            </div>

        </div>
        </>
    )
}

export default KhitanContent
