// Footer

import React from 'react'

const Footer = () => {
  return (
<>
<footer className="bg-[#ffffff] h-auto py-10">
 
  <div className="lg:flex lg:flex-row lg:justify-start lg:items-start flex flex-col items-center">
   
    <div className="lg:ml-20 lg:mt-10 text-center lg:text-left lg:text-xl text-sm lg:font-medium font-bold max-md:text-center">
      <p>Contacto: 445465757</p>
      <p>Correo electrónico: memento@gmail.com</p>
         
      <img className="lg:h-10 h-10 lg:" src="src/assets/icons.memrium/🦆 icon.share.png" alt="Icono compartir" />
      <img className="lg:h-10 lg:flex-row h-10 lg:" src="src/assets/icons.memrium/icon.youtube.png" alt="Icono YouTube" />
      <img className="lg:h-10 h-10 lg:" src="src/assets/icons.memrium/🦆 icon .facebook.png" alt="Icono Facebook" />
    </div>
  </div>

 
  <div className="mt-10 lg:mt-0 text-center lg:text-end lg:ml-auto lg:mr-28 lg:text-xl text-lg font-bold max-md:text-center">
    <p className="text-primary">©2024 por Memerium</p>
  </div>
</footer>


</>
  )
}

export default Footer
