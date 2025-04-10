import  { useEffect } from 'react';
import Swal from 'sweetalert2';

const ErrorTokenAlerts = () => {
  useEffect(() => {
    // Membuat toast notifikasi menggunakan SweetAlert2
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

    // Menampilkan toast
    Toast.fire({
      icon: "error",
      title: "Error token tidak tersedia, Silahkan Login !"
    });
  }, []);

  return null; // Tidak perlu render apapun di UI
};

export default ErrorTokenAlerts;
