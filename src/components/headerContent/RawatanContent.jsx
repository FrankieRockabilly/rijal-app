import React,{useState} from 'react'


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
            <div className="flex justify-start items-start gap-40">
                {/* <RawatanContent /> */}
                <div>
                    Ini adalah isi dari konten menurut judul layanan rawatan
                </div>
            </div>

        </div>
        </>
    )
}

export default RawatanContent
