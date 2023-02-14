import React from 'react'
import { useContext } from 'react'
import { navbarContext } from '../../App'

export default function Products() {
    const menuShowed=useContext(navbarContext)
  return (
    <div className=' w-full absolute top-16 text-black'>
        <div className='relative'>
            {menuShowed[2].map(item=>{
                return(
                    
                        item.id===21  &&
                        <img src={item.image} alt="" className="w-full h-[370px] object-cover "/>
                    
                )
            })}
            <div className=' bg-gradient-to-r flex justify-center from-gray-900/40  to-transparent w-full h-[370px] absolute top-0'>
                <div className='block w-[40%] m-auto'>
                <p className='text-gray-300 text-center uppercase font-WorkSans pb-7 font-[600] text-[11px]'>Browse our collections</p>
                <p className='text-white text-center font-quicksand font-[600] text-[45px]'>Our Products</p>
                <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}
