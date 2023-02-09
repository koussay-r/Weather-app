import React, { useContext } from 'react'
import {MdVerified} from 'react-icons/md'
import { modeContext } from '../App'
export default function Experience() {
    const [dark_Light,setDark_Light]=useContext(modeContext)
  return (
    <div id='experience' className=' mt-[100px] sm:mt-26'>
        <p className='text-center text-xl text-gray-400'>My abilities</p>
        <p className='text-center font-bold text-3xl text-[#6055f8]'>MY Experience</p>
        <div className='md:flex grid gap-3 justify-evenly mt-24'>
            <div className={dark_Light?'px-8 sm:px-12 bg-gray-900 rounded-2xl':'px-8 sm:px-12 bg-[#6d67c9] bg-opacity-60 rounded-2xl'}>
            <p className={dark_Light?'text-[#766dfc] font-bold mt-4 text-2xl text-center':'text-[#1d14a3] font-bold mt-4 text-2xl text-center'}>Front-end Develepment</p>
            <div className='flex mt-8 '>
                <div className=''>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Html</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Css</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Javascript</p>
                </span>
                </div>
                <div className='ml-16'>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>React</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Tailwind css</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Git</p>
                </span>
                </div>
            </div>
            </div>
            <div className={dark_Light?'mr-1 px-8 sm:px-16 pr-[74px] bg-gray-900 rounded-2xl':'mr-1 px-8 sm:px-16 pr-[74px] bg-[#6d67c9] bg-opacity-60 rounded-2xl'}>
            <p className={dark_Light?'text-[#766dfc] font-bold mt-4 text-2xl text-center':'text-[#1d14a3] font-bold mt-4 text-2xl text-center'}>Back-end Develepment</p>
            <div className='flex mt-8 '>    
            <div className='mr-[84px]'>
                <span className='flex  mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Firebase</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Python</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>SQL</p>
                </span>
                </div>
                <div className=''>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>C</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Node js</p>
                </span>
                <span className='flex mb-9'><MdVerified className='mt-[6px] mr-2 w-[20px] h-[20px]' color={dark_Light?'#766dfc':'#1d14a3'}/><p className={dark_Light?'text-white font-bold text-lg md:text-xl':'text-black/90 font-bold text-lg md:text-xl'}>Django</p>
                </span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
