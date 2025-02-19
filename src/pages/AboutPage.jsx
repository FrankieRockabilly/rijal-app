import React from 'react'
import Header from '../components/Header'
import About from '../components/About'

const AboutPage = () => {
  return (
    <>
      <div className='px-5 lg:px-40 pt-5   bg-white overflow-hidden h-full relative'>
            <div>
                <Header />
            </div>


            {/* isi gallery */}
            <About />
            <p>masa ini bukanabot</p>
        </div>
    </>
  )
}

export default AboutPage