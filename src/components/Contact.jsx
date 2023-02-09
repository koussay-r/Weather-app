import React, { useContext } from 'react'
import {RiMailSendLine,RiWhatsappLine,RiMessengerLine} from 'react-icons/ri'
import { modeContext } from '../App';
import {FiArrowRight} from 'react-icons/fi'
import { useState } from 'react';
export default function Contact() {
    const [dark_Light,setDark_Light]=useContext(modeContext)
    const [subject,setsubject]=useState()
    const [body,setbody]=useState()
    const handleProject=(event)=>{
        event.preventDefault()
        setsubject(event.target[0].value)
        setbody(event.target[2].value)
        window.location.href = `mailto:koussayrs11@gmail.com.com?subject=${subject}&body=${body}`;
    }
  return (
    <div id="contact" className=' mt-20'>
        <p className='text-center text-xl text-gray-400'>Get in touch</p>
        <p className='text-center font-bold text-3xl text-[#6055f8]'>Contact me</p>
        <div className='mt-20 lg:grid lg:grid-cols-2 '> 
            <div className='flex mx-auto md:mx-0 flex-col w-[330px] gap-3'>
            <p className={dark_Light?"text-white text-center text-2xl font-bold":"text-black text-center text-2xl font-bold"}>Talk to me</p>
                <div className={dark_Light?"bg-gray-900 rounded-xl px-6 py-2":"bg-[#6d67c9] bg-opacity-70 rounded-xl px-6 py-2"}><RiMailSendLine color={dark_Light?"white":"black"} className="block mx-auto mt-1 " size={40}/><p className={dark_Light?"text-white font-bold text-lg text-center mt-2 ":" mt-2 text-black font-bold text-lg text-center"}>Email</p><p className={dark_Light?"text-gray-400 text-md text-center mt-2":"text-md text-center text-black"}>Koussayrs11@gmail.com</p><a className={dark_Light?"text-lg text-[#736af5] block ml-[37%] mt-3 group text-bold":'text-lg text-black block ml-[37%] mt-3 group text-bold'} href="mailto:koussayrs11@gmail.co"> Write me </a><FiArrowRight size={22} color={dark_Light?"#736af5":"black"} className="ml-[67%] group-hover:ml-[70%] relative bottom-[22px]"/></div>
                <div className={dark_Light?"bg-gray-900 rounded-xl px-6 py-2":"bg-[#6d67c9] bg-opacity-70 rounded-xl px-6 py-2"}><RiWhatsappLine color={dark_Light?"white":"black"} className="block mx-auto mt-1 " size={40}/><p className={dark_Light?"text-white font-bold text-lg text-center mt-2 ":" mt-2 text-black font-bold text-lg text-center"}>Whatsapp</p><p className={dark_Light?"text-gray-400 text-md text-center mt-2":"text-md text-center text-black"}>53535149</p><a className={dark_Light?'text-lg text-[#736af5] block ml-[37%] mt-3 group text-bold':'text-lg text-black block ml-[37%] mt-3 group text-bold'} href="https://api.whatsapp.com/send?phone=+21653535149"> Write me </a><FiArrowRight size={22} color={dark_Light?"#736af5":"black"} className="ml-[67%] group-hover:ml-[70%] relative bottom-[22px]"/></div>
                <div className={dark_Light?"bg-gray-900 rounded-xl px-6 py-2":"bg-[#6d67c9] bg-opacity-70 rounded-xl px-6 py-2"}><RiMessengerLine color={dark_Light?"white":"black"} className="block mx-auto mt-1 " size={40}/><p className={dark_Light?"text-white font-bold text-lg text-center mt-2 ":" mt-2 text-black font-bold text-lg text-center"}>Messenger</p><p className={dark_Light?"text-gray-400 text-md text-center mt-2":"text-md text-center text-black"}>koussay dutraize</p><a className={dark_Light?'text-lg text-[#736af5] block ml-[37%] mt-3 group text-bold':'text-lg text-black block ml-[37%] mt-3 group text-bold'} href="https://m.me/Koussay Dutraize"> Write me </a><FiArrowRight size={22} color={dark_Light?"#736af5":"black"} className="ml-[67%] group-hover:ml-[70%] relative bottom-[22px]"/></div>
            </div>
            <div className='mt-20 ml-3 md:ml-0 flex flex-col mx-auto lg:mt-0 md:mt-5'>
            <p className={dark_Light?"text-white text-start lg:text-center text-2xl font-bold":"text-black text-center text-2xl font-bold"}>Write me a project</p>
            <div className=''>
                <form className='' onSubmit={handleProject}>
                    <p className={dark_Light?'text-gray-400 px-1 bg-[#0a0f1e] w-fit font-[500] ml-3 translate-y-[10px] ':'text-black px-1 bg-[white] w-fit font-[500] ml-3 translate-y-[10px]'}>Name</p>
                    <input type={'text'} className={dark_Light?"  text-gray-400 outline-none border border-gray-400 rounded-xl bg-transparent w-[350px] h-12 pl-2 ":"  text-black outline-none border border-black rounded-xl bg-transparent w-[350px] h-12 pl-2 "} placeholder="Insert Name"/>
                    <p className={dark_Light?'bg-[#0a0f1e] px-1 w-fit text-gray-400 font-[500] ml-3 translate-y-[10px]':'text-black px-1 bg-white w-fit font-[500] ml-3 translate-y-[10px]'}>Mail</p>
                    <input type={'text'} className={dark_Light?" text-gray-400 outline-none border border-gray-400 rounded-xl bg-transparent w-[350px] h-12  pl-2":"  text-black outline-none border border-black rounded-xl bg-transparent w-[350px] h-12 pl-2 "} placeholder="Insert Mail"/>
                    <p className={dark_Light?'bg-[#0a0f1e] w-fit px-1 text-gray-400 font-[500] ml-3 translate-y-[10px] ':'text-black px-1 bg-white w-fit font-[500] ml-3 translate-y-[10px]'}>Project</p>
                    <textarea className={dark_Light?" text-gray-400 pt-2 outline-none border border-gray-400 rounded-xl bg-transparent w-[350px] pb-[270px]  pl-2":" text-black pt-2 outline-none border border-black rounded-xl bg-transparent w-[350px] pb-[270px]  pl-2"} placeholder="Insert subject"></textarea>
                    <button className={dark_Light?"block justify-start text-black px-16 font-bold py-2 text-xl mt-6 bg-white rounded-xl ":"block justify-start text-black px-16 font-bold py-2 text-xl mt-6 bg-[#6d67c9] bg-opacity-70 rounded-xl "}>Send</button>
                </form>
            </div>
            </div>
        </div>
        
    </div>
  )
}
