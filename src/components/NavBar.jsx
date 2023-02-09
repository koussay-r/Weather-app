import React from 'react'
import { useContext } from 'react';
import {FaRegMoon} from 'react-icons/fa';
import {FiSun} from 'react-icons/fi'
import { modeContext } from '../App';
export default function Navbar() {
  const [dark_Light,setDark_Light]=useContext(modeContext)
    const turnMoon=()=>{
      setDark_Light(false)
      setTimeout(function() {
        document.body.style.transition = "background-color 500ms";
        document.body.style.backgroundColor = "#fdfdfd";
    }, 200);
    }
    const turnSun=()=>{
      setDark_Light(true)
      document.body.style.backgroundColor="#0a0f1e"
    }

  return (
    <div className='flex mx-4 sm:mx-0 justify-between'>
      <p className='text-[#766dfc] text-center text-2xl font-bold font-mono '>Web<br/>Developer</p>
      {dark_Light? <span > <FaRegMoon onClick={turnMoon} className='text-[#766dfc] mt-3' size={25} /> </span> :
     <span > <FiSun onClick={turnSun} color="#766dfc" className='mt-3' size={26} /></span> }
    </div>
  )
}
