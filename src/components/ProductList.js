import React from 'react'

const ProductList = ({item}) => {

  const truncate = (prodName, maxLength) => {
      if (prodName.length > maxLength) {
          return `${prodName.slice(0, maxLength)}...`
      }

      return prodName
  }

  return (
    <>
      <div className='max-w-[280px] bg-[#000000] relative text-white m-auto my-6 rounded-md'>
          <img className="w-full h-auto block rounded-t-md" src={item.prod_img} alt="" />
          <div className='p-3'>
            <p className='font-bold p-1 inline-block px-3 bg-[#252525] text-white/60 rounded-md'>{item.category}</p>
            <h1 className='text-2xl'>{truncate(item.prod_name, 25)}</h1>
            <p className='font-bold text-2xl'>₱{item.prod_price}</p>
            <button className='p-2 px-3 mt-3 bg-yellow uppercase font-bold text-black hover:bg-yellow/60'>Add To Cart</button>
          </div>
      </div>  
    </>
  )
}

export default ProductList