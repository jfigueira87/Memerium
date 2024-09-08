import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <body style={{backgroundColor: "#1E4F64"}}>
    <nav>Mi nav</nav>
          <Outlet /> 
    <footer>Mi footer</footer>
    </body>
    </>
  )
}

export default Layout
