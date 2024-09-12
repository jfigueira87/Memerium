import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
    <body style={{backgroundColor: "#1E4F64"}}>
    <nav>Mi nav</nav>
          <Outlet /> 
         <Footer/>
    </body>
    </>
  )
}

export default Layout
