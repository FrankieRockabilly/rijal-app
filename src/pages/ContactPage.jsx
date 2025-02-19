import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
     <div>
        <div className=" pt-5   bg-white overflow-hidden h-full relative">
           <div>
              <Header />
           </div>

           {/* isi kontak */}
           <Contact />
        </div>
        <div>
           <Footer />
        </div>
     </div>
  );
}

export default ContactPage