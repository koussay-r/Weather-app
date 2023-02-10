import React from 'react'
import { useContext } from 'react'
import { navbarContext } from '../../App'
export default function CampaniesLogos() {
    const menuShowed=useContext(navbarContext)
  return (
    <div className='sm:flex grid grid-cols-3  grid-rows-2 mx-auto bg-white h-[170px] mt-[50px] sm:justify-evenly'>
        {
            menuShowed[2].map(items=>{
                return(
                  <>
                  {
                    items.id<7&&
                <img src={items.image} key={items.id} alt="" className=' w-[50px] block mx-auto sm:w-[100px] h-[20px]' />
                  }
                  </> 
                )
            })
        }
    </div>
  )
}
