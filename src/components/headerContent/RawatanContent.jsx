import React,{useState} from 'react'

// icons
import { FaStar } from "react-icons/fa";


const RawatanContent = () => {
        const [activeMenuLayanan, setActiveMenulayanan]  = useState("Tentang")
        
        const menuLayananItem = ['Tentang' , 'Mengapa Kami ?', 'Promo & Diskon',  'Testimoni Pasien' , 'Booking Jadwal', 'FAQ & Tips Kesehatans']

        
    return (
        <>
        <div className='flex justify-start items-start gap-20'>
            <div className="flex flex-col justify-start items-start gap-5">
                {menuLayananItem.map((menu, index)=>(
                    <button key={index} onClick={()=> setActiveMenulayanan(menu)}
                    className={activeMenuLayanan === menu ? "text-biru" : "hover:text-biru"}
                    >
                    {menu}
                    </button>
                ))}
            </div>

            {/* konten */}
            <div className="flex justify-start items-start gap-10">
                {/* <RawatanContent /> */}
                    {/* 1 */}
                        <div>
                            <div className='w-[5rem] h-[5rem] xl:w-[15rem] xl:h-[12rem] bg-white flex justify-center items-center'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9uCfMV9DdFXBxQ8DEMqHVFtHXcY94mqGrA&s" alt="image" className='w-full h-full object-cover'/>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-1 py-4'>
                                <h2 className='font-semibold text-sm truncate w-[15rem]'>
                                    Mengenal Khitan Modern Super Ring
                                </h2>
                                <div className="flex justify-start items-start gap-0">
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[5rem] h-[5rem] xl:w-[15rem] xl:h-[12rem] bg-white flex justify-center items-center'>
                                <img src="https://investigasi.news/wp-content/uploads/2022/09/1664340295071.jpg" alt="image" className='w-full h-full object-cover'/>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-1 py-4'>
                                <h2 className='font-semibold text-sm truncate w-[15rem]'>
                                    Mengenal Khitan Modern Super Ring
                                </h2>
                                <div className="flex justify-start items-start gap-0">
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[5rem] h-[5rem] xl:w-[15rem] xl:h-[12rem] bg-white flex justify-center items-center'>
                                <img src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1609685030/attached_image/kelebihan-dan-kekurangan-sunat-cincin.jpg" alt="image" className='w-full h-full object-cover'/>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-1 py-4'>
                                <h2 className='font-semibold text-sm truncate w-[15rem]'>
                                    Keunggulan Super Ring
                                </h2>
                                <div className="flex justify-start items-start gap-0">
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                    <FaStar color='#007c9d'/>
                                </div>
                            </div>
                        </div>
                </div>

        </div>
        </>
    )
}

export default RawatanContent
