import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
    <body className='font-mainFont'>
    <nav>Mi nav</nav>
          <Outlet /> 
         <Footer/>
    </body>
    </>
  )
}

export default Layout
