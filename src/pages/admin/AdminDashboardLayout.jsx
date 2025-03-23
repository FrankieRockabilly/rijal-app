import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Gauge, Scissors, FirstAidKit } from '@phosphor-icons/react'

const AdminDashboard = () => {
  return (
    <>
      <div className='bg-white overflow-hidden relative'>
        {/* header */}
        <header className='w-full px-10 xl:px[15%] flex  justify-between items-center py-7 shadow-md  '>
          <h1>Rijal Homecare</h1>
          <p>user</p>
        </header>

        {/* sidebar dan isi konten */}
        <div className='flex min-h-screen'>
          <aside className='w-64 shadow-lg px-3 py-10 border hidden xl:block'>
            <div className='flex flex-col justify-start items-start gap-5 font-semibold'>
                <Link to={''} className='px-2 flex justify-start items-center gap-2 hover:bg-biru w-full p-2 rounded-lg text-gray-500 hover:text-white'>
                  <Gauge size={20} />
                  <p>Dashboard</p>
                </Link>
                
                <Link to={'khitan'} className='px-2 flex justify-start items-center gap-2 hover:bg-biru w-full p-2 rounded-lg text-gray-500 hover:text-white'>
                  <Scissors size={20} />
                  <p>Layanan Khitan</p>
                </Link>
                
                <Link to={''} className='px-2 flex justify-start items-center gap-2 hover:bg-biru w-full p-2 rounded-lg text-gray-500 hover:text-white'>
                  <FirstAidKit size={20} />
                  <p>Rawatan Luka</p>
                </Link>
            </div>
          </aside>

          {/* isi konten */}
          <div className='flex-1 mt-5'>
            <Outlet />
          </div>
          
        </div>

        {/* footer */}
        <div className='w-full absolute bottom-0 h-14 bg-birumuda flex justify-center items-center text-white tracking-wider font-poppins' >
              © Copyright 2025 . Designed by Frengki Iskandar        
          </div>
      </div>
    </>
  )
}

export default AdminDashboard
