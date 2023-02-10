import React, { useContext } from 'react'
import { useState } from 'react'
import {MdOutlineShoppingBag} from 'react-icons/md'
import {RiMenu4Line} from 'react-icons/ri'
import { navbarContext } from '../App'
export default function NavBar() {
    const [menuShowed,setMenuShowed]=useContext(navbarContext)
    const [zIndex,setZindex]=useState("-z-10")
    const handleMenu=()=>{
        setMenuShowed(!menuShowed)
        if(!menuShowed){ 
            setTimeout(()=>{
                setZindex("z-10")
            },700)
        }
        else{
            console.log(menuShowed)
            setZindex("-z-10")
        }
    }
  return (
    <div className='bg-white z-[100] pb-5 pt-4 '>
    <div className='flex   justify-between mt-0 mx-6 '>
        <button className='font-bold  text-xl hover:text-gray-600 ' >LUMA</button>
        <div className='hidden z-50 lg:block' >
            <ul className='flex  gap-7'>
            <li className='uppercase mt-3 text-[12px] font-sans text-gray-500 cursor-pointer  font-[600] ' >home</li>
            <li className='uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >our products</li>
            <li className='uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >about</li>
            <li className='uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >contact</li>
            <li className='uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >blog</li>
            <li className='uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >styleguide</li>
            <li className='uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >licence</li>
            <li className='flex font-bold hover:text-gray-500 cursor-pointer mt-[6px] ' ><MdOutlineShoppingBag size={30} className="pb-1" />0</li>
            </ul>
        </div>
        <div className='flex lg:hidden ' >
            <p className='flex font-bold mr-3 hover:text-gray-500 cursor-pointer mt-[6px] '><MdOutlineShoppingBag size={30} className="pb-1" />0</p>
            <RiMenu4Line size={30} className="mt-[5px] cursor-pointer" onClick={handleMenu}/>
                <div className={`absolute pb-4 transition-all duration-[700ms] ${!menuShowed ? "-top-[1500px]" : "top-[70px]" } ${zIndex} bg-white  left-0 w-full `} >
                    <ul className='flex ml-[25px] flex-col-reverse gap-7'>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >licence</li>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >styleguide</li>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >blog</li>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >contact</li>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >about</li>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans cursor-pointer hover:text-gray-500 font-[600] ' >our products</li>
                        <li className=' w-fit tracking-wide uppercase mt-3 text-[12px] font-sans text-gray-500 cursor-pointer  font-[600] ' >home</li>
                    </ul>
                </div>
        </div>
    </div>
    </div>
  )
}
