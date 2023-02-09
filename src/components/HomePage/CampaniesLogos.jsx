import React from 'react'
import lenovo from "./../../assets/lenovo.png";
import logitech from "./../../assets/logitech.png";
import samsung from "./../../assets/samsung.png";
import sony from "./../../assets/sony.png";
import waitrose from "./../../assets/waitrose.png";
import webflow from "./../../assets/webflow.png";
export default function CampaniesLogos() {
    const campanie=[
        {id:1,image:sony},
        {id:2,image:webflow},
        {id:3,image:samsung},
        {id:4,image:logitech},
        {id:5,image:lenovo},
        {id:6,image:waitrose},  
    ]
  return (
    <div className='sm:flex grid grid-cols-3  grid-rows-2 mx-auto bg-white h-[170px] mt-[50px] sm:justify-evenly'>
        {
            campanie.map(items=>{
                return <img src={items.image} key={items.id} alt="" className=' w-[50px] block mx-auto sm:w-[100px] h-[30px]' />
            })
        }
    </div>
  )
}
