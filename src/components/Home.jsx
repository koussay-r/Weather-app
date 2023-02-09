import React, { useEffect } from 'react'
import { useContext } from 'react'
import { modeContext } from '../App'
import {FaFacebookSquare,FaGithub} from 'react-icons/fa';
import {IoLogoLinkedin} from 'react-icons/io'
import {HiOutlineMinus} from 'react-icons/hi'
import svg from './../assets/Mobile wireframe-amico.svg'
import {CgMouse,CgProfile} from 'react-icons/cg';
import {BiBriefcaseAlt2} from 'react-icons/bi'
import {RiSlideshowLine} from 'react-icons/ri'
import {BsChatLeftText} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai';
export default function Home() {
    const [dark_Light,setDark_Light]=useContext(modeContext)
    const handleHome=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    
    const handleprofile=()=>{
        window.scrollTo({
            top: document.getElementById("profile").offsetTop,
            behavior: "smooth"
          });
    }
    const handleexperience=()=>{
        window.scrollTo({
            top: document.getElementById("experience").offsetTop,
            behavior: "smooth"
          });
    }
    const handleservice=()=>{
        window.scrollTo({
            top: document.getElementById("service").offsetTop,
            behavior: "smooth"
          });
    }
    const handlecontact=()=>{
        window.scrollTo({
            top: document.getElementById("contact").offsetTop,
            behavior: "smooth"
          });
    }
    
  return (
    <div className='mt-[120px]'>
        <div>
            <h3 className='text-gray-500 text-center font-bold mb-2 text-md'>Hello I'm</h3>
            <h1 className={dark_Light?'text-white ease-in-out duration-[500ms] text-center font-bold text-3xl' : 'text-[#000300] ease-in-out duration-[500ms] text-center font-bold text-3xl' }>Koussay RouissI</h1>
            <h4 className='text-gray-500 text-center font-bold mt-2 text-lg'>Web Developer</h4>
            <div className=' flex mt-16 justify-center '>
                <div>

                <button className={dark_Light?'border-2  mr-3 font-[600] hover:text-gray-900 text-[#766dfc] hover:bg-[#766dfc]  text-md sm:text-xl transition duration-[500ms] px-4 border-[#766dfc] py-2 rounded-lg':'border-2 transition duration-[500ms] mr-3 font-[600] hover:text-gray-900 text-[#4a4594] hover:bg-[#766dfc]  text-md sm:text-xl  px-4 border-[#766dfc] py-2 rounded-lg'}>Download CV</button>
                </div>
                <div>

                <button className='border-[#766dfc] font-[600] text-gray-900 text-md sm:text-xl bg-[#766dfc] px-4 py-[10px] rounded-lg  '>About Me</button>
                </div>
            </div>
        </div>
        <div>
            <div  className='grid relative top-[150px] justify-center'>
                <img src={svg} alt="" className="w-[420px]  sm:w-[500px] h-[420px] "/>
            </div>
            <div className='relative sm:-top-[150px] left-4 sm:left-0 top-[190px] flex sm:block sm:justify-start justify-center w-full sm:w-[30px]   sm:mx-0'>
                <a href='https://www.facebook.com/kou.ssay.71465'><FaFacebookSquare color='#766dfc' size={30} className=" mr-8 sm:mb-4"/></a>
                <a href='https://github.com/frankpyth'><FaGithub color='#766dfc' size={30} className=" mr-8 sm:mb-4"/></a>
                <a href='https://www.linkedin.com/in/koussay-rouissi-7534b4246/'><IoLogoLinkedin color='#766dfc' size={30} className=" mr-8 sm:mb-4"/></a>
                <p><HiOutlineMinus color='#766dfc' size={40} className="hidden sm:block rotate-90 relative right-[6px] bottom-3 "/></p>
            </div>
            <div className='relative sm:-top-[300px] top-[190px] sm:grid sm:left-[100%] justify-center w-full sm:w-[30px]   sm:mx-0'>
                <span><CgMouse className='rotate-180' color='#766dfc' size={30}/>  </span>
                <span><HiOutlineMinus className='rotate-90 relative right-[5px] ' color='#766dfc' size={40}/></span>
            </div>
        </div>
        <div className='flex z-[200] justify-center items-center'>
            <div className={dark_Light? 'fixed flex bg-[#100e3d] ease-in-out duration-[1s] pr-5  py-3 rounded-3xl  bottom-4' : 'fixed flex bg-[#a29eee] pr-5 ease-in-out duration-[1s] py-3 rounded-3xl  bottom-4'}> <span className=' ml-6'><AiOutlineHome onClick={handleHome} color={dark_Light?'#766dfc':'#100e3d'} className='ease-in-out duration-[1s] cursor-pointer' size={30}/></span>  <span className=' ml-6'><CgProfile onClick={handleprofile} color={dark_Light?'#766dfc':'#100e3d'} className='ease-in-out duration-[1s] cursor-pointer' size={30}/></span> <span className=' ml-6'><RiSlideshowLine onClick={handleexperience} color={dark_Light?'#766dfc':'#100e3d'} className='ease-in-out duration-[1s] cursor-pointer' size={30}/></span>
            <span className=' ml-6'><BiBriefcaseAlt2 onClick={handleservice} color={dark_Light?'#766dfc':'#100e3d'} className='ease-in-out duration-[1s] cursor-pointer' size={30}/></span> <span className=' ml-6'><BsChatLeftText onClick={handlecontact} color={dark_Light?'#766dfc':'#100e3d'} className='ease-in-out duration-[1s] relative cursor-pointer top-1' size={25}/></span></div>
        </div>
    </div>
  )
}
