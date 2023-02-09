import React, { useContext } from 'react'
import {FiArrowRight} from 'react-icons/fi'
import { modeContext } from '../App'
export default function Service() {
    const [dark_Light,setDark_Light]=useContext(modeContext)
  return (
    <div className=' mt-20'>
        <p className='text-center text-xl text-gray-400'>My Service</p>
        <p className='text-center font-bold text-3xl text-[#6055f8]'>What I Offer</p>
        <div className='md:flex ml-20 md:ml-0  gap-10 justify-center mt-10'>
            <div className={dark_Light?'rounded-xl pb-3 w-[250px] bg-gray-900':'rounded-xl pb-3 w-[250px] bg-[#6d67c9] bg-opacity-70'}>
            <p className={dark_Light?'text-2xl px-16 pt-20 font-bold py-7 text-white ':'text-2xl px-16 pt-20 font-bold py-7 text-black/90 '}>Front-end<br/> DEV</p>
            <span className='flex group'>

                <button className={dark_Light?' text-[#6055f8] ml-[23%] text-xl':'group text-[#1d14a3] md:ml-[23%] ml-[20%] text-lg font-bold'}>See more </button><FiArrowRight color={dark_Light?"#6055f8":"#1d14a3"} size={20} className='transition-all group-hover:ml-4 duration-500 mt-[7px] ml-1'/>
            </span>
            </div>
            <div className={dark_Light?'rounded-xl pb-3 mt-10 md:mt-0 w-[250px] bg-gray-900':'rounded-xl pb-3 mt-10 md:mt-0 w-[250px] bg-[#6d67c9] bg-opacity-70'}>
            <p className={dark_Light?'text-2xl w-[250px] px-16 pt-20 font-bold py-7 text-white ':'text-2xl px-16 pt-20 font-bold py-7 text-black/90 '}>Back-end<br/> DEV</p>
            <span className='flex group'>

                <button className={dark_Light?' text-[#6055f8]  ml-[23%] text-xl ':'group text-[#1d14a3] md:ml-[23%]  ml-[20%] text-lg font-bold '}>See more </button><FiArrowRight color={dark_Light?"#6055f8":"#1d14a3"} size={20} className='transition-all group-hover:ml-4 duration-500 mt-[7px] ml-1'/>
            </span>
            </div>
            <div className={dark_Light?'rounded-xl pb-3 mt-10 md:mt-0 w-[250px] bg-gray-900':'rounded-xl pb-3 mt-10 md:mt-0 w-[250px] bg-[#6d67c9] bg-opacity-70'}>
            <p className={dark_Light?'text-2xl px-14 pt-20 font-bold py-7 text-white ':'text-2xl px-14 pt-20 font-bold py-7 text-black/90 '}>Productive<br/>Team mate</p>
            <span className='flex group'>

                <button className={dark_Light?' text-[#6055f8]  ml-[23%] text-xl':'group text-[#1d14a3] md:ml-[23%]  ml-[20%] text-lg font-bold'}>See more </button><FiArrowRight color={dark_Light?"#6055f8":"#1d14a3"} size={20} className='transition-all group-hover:ml-4 duration-500 mt-[7px] ml-1'/>
            </span>
            </div>
        </div>
    </div>
  )
}
