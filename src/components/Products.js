import { useState, useEffect } from 'react'
import ProductList from './ProductList'
// import { PatchesMorale } from './ProductsReq'

const Products = ({title, product}) => {


  return (
    <>
      <h1 className='text-white text-2xl font-bold'>{title}</h1>
        <div className='gap-2 flex flex-wrap py-[30px]'>
          {product.map((item, id)=>(
              <ProductList key={id} item={item} />
          ))}
        </div>
    </>
  )
}

export default Products