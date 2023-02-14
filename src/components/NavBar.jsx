import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import {MdOutlineShoppingBag} from 'react-icons/md'
import {RiMenu4Line} from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { navbarContext } from '../App'
export default function NavBar() {
    const [menuShowed,setMenuShowed]=useContext(navbarContext)
    const [zIndex,setZindex]=useState("-z-10")
    const loca=useLocation()
    const [Navbuttonclicked,setNavButtonClicked]=useState("home")
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
    useEffect(()=>{
        const location=loca.pathname
        setNavButtonClicked(location)
    },[loca])
        
    
  return (
    <div className='bg-white fixed right-0 left-0 z-[100] pb-5 pt-4 '>
    <div className='flex   justify-between mt-0 mx-6 '>
        <button className='font-bold  text-xl hover:text-gray-600 ' >LUMA</button>
        <div className='hidden z-50 lg:block' >
            <ul className='flex  gap-7'>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500  font-[600]` }><Link to="/">home</Link> </li>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/Products"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500 font-[600] `}> <Link to="/Products">our products</Link> </li>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/About"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500 font-[600] `}> <Link to="/About">about</Link> </li>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/Contact"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500 font-[600] `}> <Link to="/Contact">contact</Link> </li>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/Blog"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500 font-[600] `}> <Link to="/Blog">blog</Link> </li>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/Styleguide"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500 font-[600] `}> <Link to="/Styleguide">styleguide</Link> </li>
            <li  className={`uppercase mt-3 text-[12px] font-sans ${Navbuttonclicked==="/Licience"? "text-gray-500" : "text-black" } cursor-pointer hover:text-gray-500 font-[600] `}> <Link to="/Licience">licence</Link> </li>
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
