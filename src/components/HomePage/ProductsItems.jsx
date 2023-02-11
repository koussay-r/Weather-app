import React from 'react'

export default function ProductsItems(props) {
  return (
    <div className='group mr-2'>
        <div className='flex justify-center  relative'>
        <img src={props.image} alt="" className='lg:w-[270px]  group-hover:brightness-90 group-hover:cursor-pointer w-full md:w-[400px] h-[350px] object-cover'/>
        <button className=' font-[600] group-hover:block transition-all lg:w-[75%] md:w-[80%] w-[90%] duration-700 hidden mx-auto text-md absolute bottom-4 py-3 bg-white text-black'>View Product</button>
        </div>
        <div className='mt-9 block mx-auto w-[90%] pb-8'>
            <p className='text-md font-quicksand font-[600]'>{props.name}</p>
            <p className='text-xl font-quicksand'>${props.cost} USD</p>
        </div>  
    </div>
  )
}
