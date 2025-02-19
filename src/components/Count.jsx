import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup'; // Mengimpor dari pustaka react-countup
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Mendaftarkan plugin ScrollTrigger

const Count = () => {
  const countUpRef = useRef(null); // Referensi untuk elemen CountUp

  useEffect(() => {
    // ScrollTrigger untuk memulai CountUp saat elemen masuk ke viewport
    ScrollTrigger.create({
      trigger: countUpRef.current,
      start: "top 80%", // Dimulai saat elemen mencapai 80% dari viewport
      onEnter: () => {
        // Ketika elemen masuk ke dalam tampilan, animasi CountUp dimulai
        countUpRef.current.start();
      },
    });

  }, []);

  return (
    <div>
      <CountUp
        start={0}
        end={100}
        separator=","
        duration={4}
        className="count-up-text"
        ref={countUpRef} // Menghubungkan referensi dengan elemen CountUp
        enableScrollSpy={false} // Nonaktifkan scrollspy internal CountUp
      />
    </div>
  );
};

export default Count;
