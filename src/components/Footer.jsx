import React, { useEffect } from 'react';
import { SoundcloudLogo } from '@phosphor-icons/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const Footer = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);  // Register the plugin here

        gsap.fromTo('.footer', 
            {
                x: 50, 
                opacity: 0,
                duration: 1.5
            },
            {
                x: 0,  // Use x: 0 instead of x: 1
                opacity: 1.5,
                scrollTrigger: {
                    trigger: '.footer',  // Ensure the trigger is correct
                    start: 'top 90%',     // You may want to adjust this to fit the desired timing
                    scrub: false,          // Optional: makes the animation scrub as you scroll
                },
                duration: 1,
                ease: "power1"
            }
        );
    }, []);

    return (
        <div className='w-full px-5 lg:px-36 py-20 lg:py-32 bg-zinc-900 text-white  overflow-hidden  '>
            <div className=' flex flex-col lg:flex-row justify-between items-start gap-5 footer'>
                {/* 1 */}
                <div className=' lg:w-96 max-w-72'>
                    <SoundcloudLogo size={80} color="#2abbdf" weight="duotone" />
                    <p>Rijal medic melayani perawatan orang orang gila, jadi kalo anda merasa gila silahkan berobat kesini </p>
                </div>

                <div className=' lg:w-96 '>
                    <p className='font-bold text-2xl lg:text-3xl mb-2 lg:mb-5 pb-5  border-b-2 border-white text-biru'>Layanan</p>
                    <div className='text-sm lg:text-lg flex flex-col justify-start items-start gap-5'>
                        <p>layanan 1</p>
                        <p>layanan 2</p>
                        <p>layanan 3</p>
                    </div>
                </div>

                <div className=' lg:w-96 '>
                    <p className='font-bold text-2xl lg:text-3xl mb-2 lg:mb-5 pb-5  border-b-2 border-white text-biru'>Useful Links</p>
                    <div className='text-sm lg:text-lg flex flex-col justify-start items-start gap-5'>
                        <p>Home </p>
                        <p>Tentang</p>
                        <p>Kontak</p>
                    </div>
                </div>

                <div className=' lg:w-96'>
                    <p className='font-bold text-xl lg:text-2xl mb-2 lg:mb-5 text-biru'>Kontak</p>
                    <div className='text-sm lg:text-lg flex flex-col justify-start items-start gap-5'>
                        <p className='font-bold'>Alamat :<span className='font-light'> Desa Karya Mulya, Rambah Samo, Rokan Hulu</span> </p>
                        <p className='font-bold'>E mail :<span className='font-light'> rizalaraffa14@gmail.com</span> </p>
                        <p className='font-bold'>Telp :<span className='font-light'> +62 822 7321 2907</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
