import React from "react";
import About from "../components/About";

const AboutPage = () => {
   return (
      <>
         <div>
            <div className=" pt-5   bg-white overflow-hidden h-full relative">
               {/* isi kontak */}
               <About />
            </div>
         </div>
      </>
   );
};

export default AboutPage;
