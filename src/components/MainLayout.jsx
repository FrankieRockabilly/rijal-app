import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import whatsapp from '../assets/Image/whatsapp.png';
import WhatsappModal from '../assets/modal/WhatsappModal';
import Header from "./Header";

const MainLayout = () => {
  const [isWhatsappActive, setIsWhatsappActive] = useState(false);
  const whatsappIconRef = useRef(null); // Ref untuk WhatsApp icon
  const modalRef = useRef(null); // Ref untuk WhatsApp modal

  const handleClickWhatsapp = () => {
    setIsWhatsappActive((prevState) => !prevState);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Mencegah event propagate ke parent (ikon WhatsApp)
  };

  // Menambahkan event listener untuk mendeteksi klik di luar ikon WhatsApp
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        whatsappIconRef.current && !whatsappIconRef.current.contains(e.target) &&
        modalRef.current && !modalRef.current.contains(e.target)
      ) {
        setIsWhatsappActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up event listener saat komponen di-unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
     <>
        <div className="w-full bg-warm font-poppins relativv h-full overflow-hidden">
           <div>
              <Header />
           </div>
           <Outlet />

           {/* whatsapp */}
           <div className="flex lg:flex-col justify-center items-center gap-0 w-full lg:w-auto lg:gap-5 fixed bottom-0 lg:bottom-5 right-0 lg:right-5 z-20">
              <p className="w-full lg:w-52 text-center text-sm lg:text-base bg-biru text-white px-3 py-4 lg:rounded-md shadow-lg cursor-pointer hover:text-black transition-all">
                 Book Health Check-up
              </p>
              <p className="w-full lg:w-52 text-center text-sm lg:text-base bg-orange-500 text-white px-3 py-4 lg:rounded-md shadow-lg cursor-pointer hover:text-black transition-all">
                 Book Appointment
              </p>
           </div>
        </div>
     </>
  );
};

export default MainLayout;
