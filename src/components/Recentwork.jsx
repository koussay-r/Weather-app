import React, { useContext, useState } from 'react'
import { modeContext } from '../App'
import {FiArrowRight} from 'react-icons/fi'
import cloud from './../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg';
import portfolio from "./../assets/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg";
import netflix from "./../assets/dima-solomin-sOU09hnONrQ-unsplash.jpg";
import messanger from "./../assets/christian-wiediger-GWkioAj5aB4-unsplash.jpg";
import weather from "./../assets/gavin-allanwood-rObq1WBp_Ew-unsplash.jpg";
import { motion,AnimatePresence} from 'framer-motion';
export default function Recentwork() {
    const [dark_Light,setDark_Light]=useContext(modeContext)
    const [buttonclicked,setButtonclicked]=useState(1)
    const handleAll=()=>{
        setButtonclicked(1)
    }
    const handleWeb=()=>{
        setButtonclicked(2)
    }
    const handleMobil=()=>{
        setButtonclicked(3)
    }
    const projects=[
        {id:1,name:'Cloud storage website',image:cloud,sourceCode:"https://github.com/frankpyth/React_CloudStorage_website.git",live_demo:"https://cloud-storage-site.netlify.app/",live_demo_available:true},
        {id:2,name:'Portfolio',image:portfolio,sourceCode:'https://github.com/frankpyth/Portfolio_react.git',live_demo:"https://portfilo-attempt-react.netlify.app/",live_demo_available:true},
        {id:3,name:'Netflix clone',image:netflix,sourceCode:"https://github.com/frankpyth/netflix_clone.git",live_demo_available:false},
        {id:4,name:'Messanger',image:messanger,sourceCode:"https://github.com/frankpyth/Messanger_app_clone.git",live_demo_available:false},
        {id:5,name:'Weatherapp',image:weather,sourceCode:"https://github.com/frankpyth/weather_app.git",live_demo_available:false},
    ]
  return (
    <div id="service" className=' mt-20'>
        <p className='text-center text-xl text-gray-400'>My portfolio</p>
        <p className='text-center font-bold text-3xl text-[#6055f8]'>Recent Work</p>
        <div className='mt-16 ml-6'>
            <div>
                <ul className='flex gap-14 justify-center list-none'>
                    <li onClick={handleAll} className={ dark_Light? buttonclicked===1?"transition-all duration-700 cursor-pointer bg-[#6055f8] rounded-lg text-black p-2 font-bold text-lg"
                    :"transition-all cursor-pointer p-2 duration-700 rounded-lg text-white font-bold text-lg":buttonclicked===1?"transition-all duration-700 cursor-pointer bg-[#6055f8] rounded-lg text-white p-2 font-bold text-lg":"transition-all cursor-pointer p-2 duration-700 rounded-lg text-black font-bold text-lg"}>ALL</li>
                    <li onClick={handleWeb} className={dark_Light? buttonclicked===2?"transition-all duration-700 cursor-pointer bg-[#6055f8] rounded-lg text-black p-2 font-bold text-lg"
                    :"transition-all cursor-pointer p-2 duration-700 rounded-lg text-white font-bold text-lg":buttonclicked===2?"transition-all duration-700 cursor-pointer bg-[#6055f8] rounded-lg text-white p-2 font-bold text-lg":"transition-all cursor-pointer p-2 duration-700 rounded-lg text-black font-bold text-lg"}>Web</li>
                    <li onClick={handleMobil} className={dark_Light? buttonclicked===3?"transition-all duration-700 cursor-pointer bg-[#6055f8] rounded-lg text-black p-2 font-bold text-lg"
                    :"transition-all cursor-pointer p-2 duration-700 rounded-lg text-white font-bold text-lg":buttonclicked===3?"transition-all duration-700 cursor-pointer bg-[#6055f8] rounded-lg text-white p-2 font-bold text-lg":"transition-all cursor-pointer p-2 duration-700 rounded-lg text-black font-bold text-lg"}>Mobile</li>
                </ul>
            </div>
            <div className={buttonclicked!==3?'mt-20 ':"hidden"}>
                <motion.div layout className='grid grid-cols-1 mr-5 xl:ml-[90px] xl:w-[700px] gap-3 md:grid-cols-2'>
                    <AnimatePresence initial={false}>
                    {projects.map(item=>{
                        return(
                            <div key={item.id} className={dark_Light? "bg-gray-900 block mx-auto px-4 py-4 rounded-xl":"bg-[#6d67c9] bg-opacity-70 px-7 py-4 rounded-xl"}>
                                <img src={item.image} alt="" className='w-[350px] rounded-lg h-[200px]'/>
                                { item.live_demo_available?
                                <div className='mt-6 ml-1'>
                                    <p className='text-white font-bold text-lg'>{item.name}</p>
                                    <div className={dark_Light?' text-[#6d67c9] flex mt-1':"text-[#1d14a3] flex mt-1"}>
                                        <div className='group flex'>
                                <a className="font-bold" href={item.sourceCode}>Source code</a><FiArrowRight size={20} className='mt-[5px] group-hover:ml-4 transition-all duration-400 ml-1'/>
                                </div>
                                <div className='group flex ml-3'>
                                <a  className="font-bold"href={item.live_demo}>Demo</a><FiArrowRight size={20} className='mt-[5px] group-hover:ml-4 transition-all duration-400 ml-1'/>
                                </div>
                                    </div>
                                </div>
                                :
                                <div className='mt-6 ml-1'>
                                    <p className='text-white font-bold text-lg'>{item.name}</p>
                                    <div className={dark_Light?' text-[#6d67c9] group flex mt-1':"text-[#1d14a3] group flex mt-1"}>
                                <a  className="font-bold"href={item.sourceCode}>Source code</a><FiArrowRight size={20} className='mt-[5px] group-hover:ml-4 transition-all duration-400 ml-1'/>
                                </div>
                                </div>
                    }
                            </div>
                        )
                    })}
                    </AnimatePresence>
                </motion.div>

            </div>
            
            <div className={buttonclicked===3?"mt-20 pb-[350px]":"hidden"}>
                <p className={dark_Light?'text-gray-400 text-xl mr-3 text-center':'text-black text-xl mr-3 text-center'}>Nothing here yet ...

                </p>
            </div>
        </div>
    </div>
  )
}
