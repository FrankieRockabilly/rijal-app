import React, { useEffect, useState } from 'react'
import { Envelope, MapPin, Phone } from '@phosphor-icons/react'
import Maps from './Maps'
import Line from './Line'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

const Contact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)

    const handleClickSendFeedback = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setName('')
            setEmail('')
            setMessage('')
            setPhone('')
            setLoading(false)
            setIsSuccessSendFeedback(true)
        }, 2000);
        alert('berhasil submit')
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.contact', {
            opacity: 0,
            x: -40,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 80%',
                once: true,
            }
        })
        gsap.fromTo('.send', {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.send',
                start: 'top 80%',
                once: true,
            }
        })
        gsap.fromTo('.maps', {
            opacity: 0,
            x: 40,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.maps',
                start: 'top 80%',
                once: true,
            }
        })
    }, [])



    return (
       <>
          <div className="pb-10 pt-28 px-5 lg:px-40">
             <div className="flex flex-col justify-center items-center gap-6 ">
                <h1 className="text-center text-2xl lg:text-3xl font-bold text-zinc-900">
                   Kontak Kami
                </h1>
                <Line />
             </div>
             {/* {isSuccesSendFeedback && (
                    <SuksesKirimPesan />
                )} */}
             <div className="flex flex-wrap shadow-xl bg-white py-2 lg:py-10 mt-5 border">
                {/* 1 */}
                <div className="px-16 py-16 ">
                   <form
                      className=" flex flex-col justify-start items-start gap-5  w-2[70%] contact"
                      onSubmit={handleClickSendFeedback}
                   >
                      <div className="flex flex-wrap justify-between gap-5 w-full">
                         {/* <label htmlFor="">Full Name*</label> */}
                         <input
                            type="text"
                            className="w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-white"
                            placeholder="Full Name*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                         />
                         <input
                            type="email"
                            className="w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-white"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                         />
                         <input
                            type="text"
                            className="w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-white"
                            placeholder="Phone Number*"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                         />
                      </div>
                      <div className="w-full">
                         <input
                            type="text"
                            className="outline-none border-b-[1px] py-3 border-gray-500 bg-white w-full"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            aria-required
                         />
                      </div>
                      <button
                         type="submit"
                         className={`px-2 py-3 my-5 w-40 bg-biru text-white shadow-2xl shadow-primarySec send ${
                            loading ? "cursor-not-allowed" : ""
                         }`}
                      >
                         {loading ? (
                            <span className="loading loading-spinner loading-xs"></span>
                         ) : (
                            <p>Send Message</p>
                         )}
                      </button>
                   </form>
                </div>

                {/* 2 */}
                <div className="grow w-auto px-5 py-5 flex flex-col justify-start items-start gap-3 text-gray-700 maps">
                   <div className="flex justify-start items-center gap-3">
                      <div className="px-2 py-2 rounded-full border">
                         <Envelope size={32} weight="thin" />
                      </div>
                      <p className="break-words text-wrap text-lg">
                         rizalaraffa14@gmail.com
                      </p>
                   </div>
                   <div className="flex justify-start items-center gap-3">
                      <div className="px-2 py-2 rounded-full border">
                         <Phone size={32} weight="thin" />
                      </div>
                      <p className="break-words text-wrap text-lg">
                         +62 822 7321 2907
                      </p>
                   </div>
                   <div className="flex justify-start items-center gap-3">
                      <div className="px-2 py-2 rounded-full border">
                         <MapPin size={32} weight="thin" />
                      </div>
                      <p className="break-words text-wrap text-lg">
                         Rokan Hulu,Riau, indonesia
                      </p>
                   </div>

                   <div className="w-full">
                      <Maps />
                   </div>
                </div>
             </div>
          </div>
       </>
    );
}

export default Contact