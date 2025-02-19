import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'

const GalleryPage = () => {
  return (
    <>
      <div className='px-5 lg:px-40 pt-5   bg-white overflow-hidden h-full relative'>
            <div>
                <Header />
            </div>


            {/* isi gallery */}
            <Gallery />
        </div>
    </>
  )
}

export default GalleryPage