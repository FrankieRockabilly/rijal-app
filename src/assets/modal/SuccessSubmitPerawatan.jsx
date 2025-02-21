import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SuccessSubmitPerawatan = () => {

  useEffect(() => {
    // Menampilkan SweetAlert setelah komponen dimuat
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    // Menampilkan pesan berhasil
    Toast.fire({
      icon: "success",
      title: "Berhasil submit jadwal perawatan luka"
    });

  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div>
      {/* Komponen ini akan menampilkan SweetAlert saat di-render */}
    </div>
  );
};

export default SuccessSubmitPerawatan;
