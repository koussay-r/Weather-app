import React from 'react'
export default function ProductsItems(props) {
  return (
    <div className='group  md:block md:mx-auto mr-2'>
        <div className='flex justify-center group-hover:brightness-95 w-full md:w-[400px] lg:w-[270px] relative'>
          {
            (props.id===13||props.id===15) &&
            <p className='text-white  text-[11px] font-Montserrat  uppercase bg-[#18181d]  py-3 px-5 absolute top-0 right-0'>on sale</p>
          }
          {
            (props.id===17||props.id===20) &&
            <p className='text-[#18181d] text-[11px] font-Montserrat uppercase bg-white py-3 px-5 absolute top-0 left-0'>featured</p>
          }
        <img src={props.image} alt="" className='lg:w-[270px] transition-all duration-300   group-hover:cursor-pointer w-full md:w-[400px] h-[350px] object-cover'/>
        <button className=' font-[600] group-hover:block transition-all lg:w-[75%] md:w-[80%] w-[90%] duration-700 hidden mx-auto text-md absolute bottom-4 py-3 bg-white text-black'>View Product</button>
        </div>
        <div className='mt-9 block mx-auto w-[90%] pb-8'>
            <p className='text-md font-quicksand  font-[600]'>{props.name}</p>
            <p className='text-xl mt-3 font-quicksand'>$ {props.cost} USD</p>
        </div>
        
    </div>
  )
}
