import axios from 'axios';
import React, { useState } from 'react'
import {HiOutlineSearch} from "react-icons/hi";
export default function App() {
  const [bgImage,setBgImage]=useState("")
  const [inputValue,setInputValue]=useState("")
  const handleInptValue=(e)=>{
    setInputValue(e.target.value)
  }
  const handleBgImage=async()=>{
    console.log(process.env.REACT_APP_UNSPLASH_API_KEY)
    const headers={
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    }
    try{
      const response=await axios.get(`https://api.unsplash.com/search/photos?query=${inputValue}`,{headers})
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='w-full absolute flex justify-center top-0 bottom-0'>
      <div className='block bg-red-600 rounded-xl w-[350px] m-auto'>
        <div className='flex pt-2 justify-center'>
          <input type={"Text"} value={inputValue} onChange={handleInptValue} className="outline"/><HiOutlineSearch onClick={handleBgImage}/>
        </div>
      </div>
    </div>
  )
}
