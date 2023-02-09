import React from 'react'
import {FaInstagramSquare,FaTwitterSquare,FaFacebookSquare} from "react-icons/fa";
import {AiOutlineCopyright} from "react-icons/ai"
export default function Copyright() {
  return (
    <div className='mt-20 bg-gray-400 pb[300px] w-full'>
        <div className='pt-20'>
            <p className='text-center text-2xl text-black font-bold '>Web developement</p>
            <ul className='flex justify-center ml-5 items-center gap-12 mt-10'>
              <li className='text-black font-[600]'>About</li>
              <li className='text-black font-[600]'>Projects</li>
              <li className='text-black font-[600]'>Testimonial</li>
            </ul>
            <div className='flex justify-center mt-6 items-center gap-12'>
              <a href='https://www.facebook.com/kou.ssay.71465'><FaFacebookSquare size={30} color='black'/></a>
              <FaInstagramSquare size={30} color='black'/>
              <FaTwitterSquare size={30} color='black'/>
            </div>
            <p className='flex justify-center font-[600] mt-10'> <AiOutlineCopyright size={20} className="mr-2 mt-[3px]"/> All rights reserved</p>
        </div>
    </div>
  )
}
