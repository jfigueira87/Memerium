import React from 'react'
import Home from '../pages/Home'


const Buttons = ({text}) => {
  return (
    <div className="w-full flex justify-center ">
      <button className=" bg-[#D9D9D9] font-[Jua] rounded-[22px] w-72  text-2xl  m-20 p-6">{text}</button>
    </div>
  )
}

export default Buttons
