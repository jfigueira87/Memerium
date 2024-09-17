// Footer

import React from 'react'
import iconFacebook from '../assets/images/iconFacebook.png'
import iconYoutube from '../assets/images/iconYoutube.png'
import iconShare from '../assets/images/iconShare.png'

const Footer = () => {
  return (
<>
<footer className="bg-[#ffffff] h-auto py-10" id="contact">
 
  <div className="lg:flex lg:flex-row lg:justify-start lg:items-start flex flex-col items-center">
   
    <div className="lg:ml-20 lg:mt-0 text-center lg:text-left lg:text-xl text-sm lg:font-medium font-bold max-md:text-center">
      <p>Contacto: 445465757</p>
      <p>Correo electrónico: memento@gmail.com</p>
    <div className="lg:flex flex lg:mt-6 space-x-3 max-sm:mt-4 max-sm:justify-center lg:space-x-3">   
      <img className="lg:h-10 h-10 lg:" src={iconShare} alt="Icono compartir" />
      <img className="lg:h-10 lg:flex-row h-10 lg:" src={iconYoutube} alt="Icono YouTube" />
      <img className="lg:h-10 h-10 lg:" src={iconFacebook} alt="Icono Facebook" />
    </div>  
    </div>
  </div>

 
  <div className="mt-10 lg:-mt-8 text-center lg:text-end lg:ml-auto lg:mr-28 lg:text-xl text-lg font-bold max-md:text-center">
    <p className="text-primary">©2024 por Memerium</p>
  </div>
</footer>


</>
  )
}

export default Footer
