import React, { useEffect } from "react";
import Contact from "../components/Contact";

const ContactPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div>
         <div className=" pt-5   bg-white overflow-hidden h-full relative">
            {/* isi kontak */}
            <Contact />
         </div>
      </div>
   );
};

export default ContactPage;
