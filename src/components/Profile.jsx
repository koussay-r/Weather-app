import React, { useContext } from 'react'
import svg from './../assets/undraw_lost_online_re_upmy.svg';
import {IoMedalSharp} from "react-icons/io5";
import {BsBriefcaseFill,BsHeadset} from 'react-icons/bs'
import { modeContext } from '../App';
export default function Profile() {
    const [dark_Light,setDark_Light]=useContext(modeContext)
  return (
    <div className='mt-[300px] sm:mt-[0px]' id='profile'>
        <p className='text-center text-xl text-gray-400'>My intro</p>
        <p  className='text-center font-bold text-3xl text-[#766dfc]'>About Me</p>
        <div className='mt-10 md:grid md:grid-cols-2 '>
            <div><img src={svg} alt="" className='w-[300px] sm:ml-[110px] md:ml-0 ml-[14%] sm:w-[350px] h-[250px] sm:h-[300px]'/> </div>
            <div className='md:mt-10 mt-10 md:ml-0'>
            <div className=' flex  justify-center'>
                <div className={dark_Light?'md:ml-16 ml-2 p-3 bg-gray-900 rounded-xl md:p-4':'md:ml-16 ml-2 p-3 bg-[#766dfc] bg-opacity-70 rounded-xl md:p-4'}><span className='relative left-[33%]'><IoMedalSharp className='w-[24px] md:w-[30px] md:h-[30px] h-[24px]' color="#493cff" /></span><p className={dark_Light?' text-md md:text-xl text-white font-bold':' text-md md:text-xl text-black/90 font-bold'}>Experience</p>
                <p className=' text-[10px] md:text-[12px] font-[600] text-center text-gray-600'>1 year working</p>
                </div>
                <div className={dark_Light?'md:ml-4 ml-4 p-3 bg-gray-900 rounded-xl md:p-4':'md:ml-4 ml-2 p-3 bg-[#766dfc] bg-opacity-70 rounded-xl md:p-4'}><span className='relative left-[33%]'><BsBriefcaseFill className='w-[24px] md:w-[30px] md:h-[30px] h-[24px]' color="#493cff"/></span><p className={dark_Light?' text-md md:text-xl text-white font-bold':' text-md md:text-xl text-black/90 font-bold'}>Complited</p>
                <p className=' text-[10px] md:text-[12px] font-[600] text-center text-gray-600'>6 projects<br/> complited</p>
                </div>
                <div className={dark_Light?'md:ml-4 ml-4 p-3 bg-gray-900 rounded-xl md:p-4 md:px-8':'md:ml-4 ml-4 p-3 bg-[#766dfc] bg-opacity-70 rounded-xl md:p-4 md:px-8'}><span className='relative left-[33%]'><BsHeadset className='w-[24px] md:w-[30px] md:h-[30px] h-[24px]' color="#493cff" /></span><p className={dark_Light?' text-md md:text-xl text-white font-bold':' text-md md:text-xl text-black/90 font-bold'}>Support</p>
                <p className=' text-[10px] md:text-[12px] font-[600] text-center text-gray-600'>online 24/7</p>
                </div>
            </div>
            <p className={dark_Light?'text-gray-400 text-md text-center sm:text-start sm:ml-[53px] mt-3':'text-gray-900 text-md text-center sm:text-start sm:ml-[53px] mt-3'}>FullStack-developer , React,Tailwind css,Firebase,Python,C and many others Languages ... im a junior Developer who's always looking forward to achieve his goals </p>
            <button className='bg-[#766dfc] mt-8 block m-auto sm:ml-[53px] mx-auto text-gray-800 text-lg rounded-[6px] font-[600] px-3 py-2 '>Contact me</button>
        </div>
            </div>
    </div>
  )
}
