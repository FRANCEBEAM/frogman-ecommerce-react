import React from 'react'
import { Link } from 'react-router-dom'
import { PatchesMorale } from './ProductsReq'


const Patches = () => {
  return (
    <>
        {
        PatchesMorale.map((patch, id) => (
        <div className='hidden sm:inline-block sm:w-[230px] sm:p-2 sm:relative' key={id}>
            <div className='w-full h-auto bg-black block'>
                <img class="w-full h-auto" src={patch.prod_img} alt="" />
                <div className='p-2 whitespace-normal'>
                    <p className='text-md text-gray-400 font-bold uppercase'>{patch.category}</p>
                    <h1 className='text-lg text-white font-bold uppercase'>{patch.prod_name}</h1>
                    <p className='text-1xl text-white uppercase'>{patch.prod_price}</p>
                    <div className='py-3'>
                      <button className='bg-yellow p-2 px-3 uppercase font-bold rounded-md'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
        ))
        }
    </>
  )
}

export default Patches