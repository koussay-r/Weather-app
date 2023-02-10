import React from 'react'
import { useContext } from 'react'
import { navbarContext } from '../../App'

export default function Products() {
  const menuShowed=useContext(navbarContext)
  return (
    <div className='w-[85%] block mx-auto'>
        <p className=' font-quicksand w-[320px] text-black/90 font-semibold text-4xl '>The right light can transform any environment</p>
        <div className=' flex gap-7 mt-10'>
            {
              menuShowed[2].map(items=>{
                return (
                  <>
                  {
                    7<=items.id&&items.id<=8 &&
                    <div className='flex'>
                      {items.id===7?
                      <div className='relative block justify-center group'>
                        <img src={items.image} alt="" className='w-[600px] flex justify-center h-[600px]'/>
                        <button className=' group-hover:block justify-center hidden w-[90%] transition-all duration-700  text-2xl absolute bottom-2 bg-white text-black'>View Product</button>
                      </div> 
                      : 
                      <div className='relative block mx-auto  group h-[500px]'>
                        <img src={items.image} alt="" className='w-[600px] h-[500px]'/>
                        <button className=' group-hover:block transition-all duration-700 hidden mx-auto text-2xl absolute bottom-2 bg-white text-black'>View Product</button>
                      </div>
                      }
                    </div>
                  }
                  </>
                )
              })
            }
        </div>
    </div>
  )
}
