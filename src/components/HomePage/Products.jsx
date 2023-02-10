import React from 'react'
import { useContext } from 'react'
import { navbarContext } from '../../App'

export default function Products() {
  const menuShowed=useContext(navbarContext)
  return (
    <div className='w-[85%] block mx-auto'>
        <p className=' font-quicksand w-[320px] text-black/90 font-semibold text-4xl '>The right light can transform any environment</p>
        <div className=' md:flex gap-7 mt-10'>
            {
              menuShowed[2].map(items=>{
                return (
                  <>
                  {
                    7<=items.id&&items.id<=8 &&
                    <div key={items.id*15} className='md:flex'>
                      {items.id===7?
                      <div key={items.id} className='relative flex justify-center cursor-pointer group'>
                        <img src={items.image} alt="" className='w-[600px] transition-all duration-300 group-hover:brightness-90 object-cover flex justify-center h-[600px]'/>
                        <button className=' group-hover:block justify-center hidden w-[90%] transition-all duration-700  text-md absolute bottom-4 py-3 bg-white text-black'>View Product</button>
                      </div> 
                      : 
                      <div key={items.id} className='relative sm:w-[500px] md:w-full   mt-12 md:mt-0 cursor-pointer flex justify-center  group h-[500px]'>
                        <img src={items.image} alt="" className=' transition-all duration-300 group-hover:brightness-90  sm:w-[500px] md:w-[600px] object-cover w-[600px] h-[500px]'/>
                        <button className=' group-hover:block transition-all w-[90%] duration-700 hidden mx-auto text-md absolute bottom-4 py-3 bg-white text-black'>View Product</button>
                      </div>
                      }
                    </div>
                  }
                  
                  </>
                )
              })
            }
        </div>
        <div className='grid grid-cols-2 w-full mt-7 grid-rows-2'>
          <div>
            <p>Meet the Belmont, by Pablo Designs</p>
          </div>
          <div>
            <p>By fusing the highest technical sensibilities with the most appropriate material palette, Pablo is able to create unique, timeless designs with the power to transform any environment.</p>
          </div>
          <div className='hidden md:block'>

          </div>
          <div className='mt-10 col-span-2 md:col-span-1 block mx-auto w-full border'>
            <button className='block mx-auto '>discover more products</button>
          </div>
        </div>
    </div>
  )
}
