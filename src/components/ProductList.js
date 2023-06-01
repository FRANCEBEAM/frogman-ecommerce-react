import React from 'react'

const ProductList = ({item}) => {
  return (
    <>
            <div className='max-w-[270px] bg-[#000000] relative text-white m-auto my-6'>
                <img className="w-full h-auto block" src={item?.prod_img} alt="" />
                {/* <div className='p-3'>
                  <p className='font-bold p-1 bg-[#252525] text-white/60 w-[100px] rounded-md'>{item?.prod_img}</p>
                  <h1 className='text-2xl'>{item?.prod_img}</h1>
                  <p className='font-bold text-2xl'>{item?.prod_img}</p>
                  <button className='p-2 px-3 mt-3 bg-yellow uppercase font-bold text-black'>Add To Cart</button>
                </div> */}
            </div>  
    </>
  )
}

export default ProductList