// Footer

import React from 'react'

const Footer = () => {
  return (
<>
  <footer className="flex z-40 bg-[#ffffff] h-48">
    <div className="flex-col">
    <div className="flex-row ml-20 mt-10  text-xl font-medium">
      <p>Contacto: 445465757</p>
      <p>Correo electrónico: memento@gmail.com</p>
    </div>
    <div className="flex ml-20 mt-10 space-x-3 ">
      <img className="h-10" src="src/assets/icons.memrium/🦆 icon.share.png"></img>
      <img className="h-10" src="src/assets/icons.memrium/icon.youtube.png"></img>
      <img className="h-10" src="src/assets/icons.memrium/🦆 icon .facebook.png"></img>
    </div>
    </div>
    <div className=" flex ml-auto mr-28 mt-36 text-xl font-bold">
      <p className=" text-primary" >©2024 por Memerium </p>
    </div>
  </footer>
</>
  )
}

export default Footer
