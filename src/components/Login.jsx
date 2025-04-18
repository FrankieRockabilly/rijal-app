import axios from "axios";
import React, {  useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import LoginSuccess from "../notification/LoginSucces";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
   const [isShowPassword, setIsShowPassword] = useState(true);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loginMessage, setLoginMessage] = useState("");
   const [showNotification, setShowNotification] = useState(false);
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleCLickIsShowPassword = () => {
      setIsShowPassword((prevState) => !prevState);
   };

   const handleLogin = async (e) => {
      e.preventDefault();
      try {
         if (!email || !password) {
            setLoginMessage("masukkan email dan password");
            setTimeout(() => {
               setLoginMessage(""); // Menghapus pesan setelah 3 detik
            }, 3000);
            return;
         }
         setLoading(true);
         const response = await axios.post("http://localhost:5000/login", {
            email: email,
            password: password,
         });
         console.log(response.data);
         sessionStorage.setItem("token", response.data.token);
         setShowNotification(true);
         setTimeout(() => {
            navigate("/adminDashboard/homepage");
         }, 3000);
      } catch (error) {
         console.log(error.response.data.msg);
         setLoginMessage(error.response.data.msg);
         setLoading(false);
      }
   };

   return (
      <>
         <div className="h-screen bg-[#caeff8] font-poppins">
            {showNotification && <LoginSuccess />}

            <div className="w-full h-full bg-white rounded-lg p-5 flex justify-between items-center gap-2 shadow-xl overflow-hidden">
               {/* bg */}
               <div className="bg-hijau h-full w-[200rem] rounded-lg p-10 hidden xl:block relative overflow-hidden">
                  <div className=" max-w-[30rem] text-white border-b-4 border-white py-4">
                     <h1 className="text-4xl font-bold mb-24">
                        Selamat datang
                     </h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus porro obcaecati molestias laudantium provident
                        expedita exercitationem magnam praesentium a assumenda?
                     </p>
                  </div>
                  <div className="absolute bg-contain -bottom-32">
                     <img
                        src="https://res.cloudinary.com/dplikeeby/image/upload/v1742440319/flat-world-health-day-background_veegsz.png"
                        alt=""
                     />
                  </div>
               </div>

               {/* input form */}
               <div className="grow w-full h-full px-10 lg:px-24 flex flex-col justify-center items-center gap-5 text-gray-900 relative">
                  {loginMessage && (
                     <p className="text-red-600">{loginMessage} ! </p>
                  )}
                  <a href={"/"}>
                     <button className="py-4 text-xl text-black flex justify-start items-center gap-3 absolute top-0 left-5">
                        <IoMdArrowRoundBack />
                        <p>Kembali</p>
                     </button>
                  </a>
                  <h2 className="font-bold text-4xl">Selamat Datang !</h2>
                  <p>Please enter your details</p>

                  <form
                     className="w-full flex flex-col justify-start items-start gap-7"
                     onSubmit={handleLogin}
                  >
                     <div className=" w-full">
                        {/* <label className="font-medium text-black">Email</label> */}
                        <input
                           type="email"
                           className="px-4 py-4 w-full border bg-gray-100 text-gray-700 rounded-md outline-none"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className=" w-full">
                        {/* <label className="font-semibold text-black">
                           Password
                        </label> */}
                        <div className="relative">
                           <input
                              type={isShowPassword ? "password" : "text"}
                              className="px-4 py-4 w-full border bg-gray-100 text-gray-700 rounded-md outline-none relative"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />
                           <div className="absolute right-4 bottom-1/2 translate-y-1/2">
                              <div
                                 onClick={handleCLickIsShowPassword}
                                 className="cursor-pointer"
                              >
                                 {isShowPassword ? (
                                    <FaRegEyeSlash />
                                 ) : (
                                    <IoEyeOutline />
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                     <button
                        type="submit"
                        className={`bg-hijau w-full text-white text-center py-4 rounded-md font-semibold ${
                           loading ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                     >
                        {loading ? (
                           <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                           "Login"
                        )}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;
