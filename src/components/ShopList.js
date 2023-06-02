import React from 'react'
import Products from './Products'
import { PatchesMorale, Apparels } from './ProductsReq'


const ShopList = () => {
  return (
    <>
        <div className='w-full h-full bg-[#121212] relative'>
            <div className='w-full h-full lg:max-w-[1200px] lg:m-auto'>
                <div className='text-white relative p-4 pt-[160px]'>
                    <h1 className='text-center uppercase font-bold text-3xl'>
                        Gear up for Tactical Excellence with our Exclusive Store
                    </h1>
                </div>
                <div className='p-4 pt-[36px] relative flex justify-end'>
                    <form>
                        <div className='flex gap-2 z-10'>
                            <input className='p-1 px-3 bg-transparent border-2 border-white text-white' type="text" />
                            <button className='bg-yellow p-1.5 px-4 rounded-md uppercase font-bold'>Search</button>
                        </div>
                    </form>
                </div>

                <div className='p-4 relative w-full pt-[20px] lg:p-0'>
                    <Products rowId='1' title="Morale Patches" product={PatchesMorale} />
                    <Products rowId='2' title="Apparel & Shirts" product={Apparels} />
                </div>

            </div>
        </div>
    </>
  )
}

export default ShopList