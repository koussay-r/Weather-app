import React from 'react'
import { useContext } from 'react'
import { navbarContext } from '../../App'
import ProductsItems from './../HomePage/ProductsItems'
export default function Products() {
    const menuShowed=useContext(navbarContext)
  return (
    <div className=' w-full absolute top-16 text-black'>
        <div className='relative'>
            {menuShowed[2].map(item=>{
                return(
                    
                        item.id===22  &&
                        <img src={item.image} alt="" className="w-full brightness-50 h-[370px] object-cover "/>
                    
                )
            })}
            <div className=' flex justify-center w-full h-[370px] absolute top-0'>
                <div className='block w-[90%] sm:w-[80%] lg:w-[44%] m-auto'>
                <p className='text-gray-300 text-center uppercase font-WorkSans pb-5 font-[600] text-[12px]'>Browse our collections</p>
                <p className='text-white text-center font-quicksand font-[600] text-[45px]'>Our Products</p>
                <p className='text-center font-WorkSans pt-4 font-[600] text-gray-300'>Create inspiring, beautifully illuminated rooms. Review our wide selection of stylish contemporary lamps for living room, bedroom, bath and kitchen—and get enlightened about modern design.</p>
                </div>
            </div>
        </div>
        <div className='block mx-auto mt-16 w-[90%]'>

        <div className='w-full lg:flex'>
            <div className='lg:w-[250px] w-[500px] pb-8 lg:pb-0 block my-auto'>
            <p className=' font-quicksand text-[45px] font-[500]  '>Explore Categories</p>
            <p className=' font-WorkSans pt-2 font-[600] text-gray-500'>Lighting does not just illuminate your home. It actually creates an ambiance and functions like any other piece of decor.</p>
            </div>
                {menuShowed[2].map(item=>{
                    return(
                        <div className='gap-16 relative mx-auto flex'>
                        {
                        (item.id===9||item.id===19||item.id==13)&&
                        <div className='flex group justify-center  realtive'>
                        <img src={item.image} alt="" className='lg:w-[270px] group-hover:brightness-90 transition-all duration-300   group-hover:cursor-pointer w-[1400px] mb-10 lg:mb-0  h-[500px] object-cover'/>
                   {

            (item.id===9) &&
                <p className='text-[#18181d] text-[11px] font-Montserrat uppercase bg-white py-3 px-5 absolute top-0 left-0'>featured</p>
                   }     
            {

                (item.id===19) &&
                <p className='text-[#18181d] text-[11px] font-Montserrat uppercase bg-white py-3 px-5 absolute top-0 left-0'>featured</p>
            }
            {

                (item.id===13) &&
                <p className='text-[#18181d] text-[11px] font-Montserrat uppercase bg-white py-3 px-5 absolute top-0 left-0'>featured</p>
            }
            
            </div>
                        
                
        }
                </div>
                )

                })}
        </div>
        </div>
    </div>
  )
}
