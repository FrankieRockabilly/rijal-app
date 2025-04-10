import React, { useEffect, useState } from "react";
import ErrorTokenAlerts from "../../notification/ErrorTokenAlert";
import { useNavigate } from "react-router-dom";

const AdminHomepage = () => {
   const [errToken, setErrToken] = useState(false);
   const navigate = useNavigate()

   const getToken = sessionStorage.getItem('token')
   useEffect(()=>{
    console.log('->',getToken);
    if(!getToken || getToken == null){
        setErrToken(true)
        setTimeout(() => {
            navigate("/login")
        }, 3000);
    }else{
        setErrToken(false)
    }
    
   },[navigate])

   return (
      <>
         <div className="px-10 xl:px-[2%] py-5">
            {errToken && (
                <ErrorTokenAlerts />
            )}
            <div className="h-48 border-2 bg-biru text-white py-12 rounded-3xl w-full p-10 hidden xl:block relative overflow-hidden bg-cover">
               <h1 className="text-5xl font-semibold tracking-wide ">
                  Selamat datang di Rijal Homecare.{" "}
               </h1>
               <p>Berikut adalah data pelayanan Khitan Super Ring</p>
            </div>

            {/* content */}
            <div className="flex justify-between items-start gap-10">
               <div className="border rounded-lg w-full">
                  <h1> halo</h1>
               </div>
               <div className="border rounded-lg w-full">
                  <h1> halo</h1>
               </div>
            </div>
         </div>
      </>
   );
};

export default AdminHomepage;
