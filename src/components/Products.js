import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from './ProductList'

const Products = ({title, fetchProduct}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      axios.get(fetchProduct).then((response) => {
          setProducts(response.data.results)
      })
  }, [fetchProduct])

  return (
    <>
      <h1 className='text-white text-2xl font-bold'>{title}</h1>

        <div className='gap-2 flex flex-wrap py-[30px]'>
        {products.map((item, id)=>(
            <ProductList item={item} key={id} />
            // <div className='max-w-[270px] bg-[#000000] relative text-white m-auto my-6' key={id}>
            //     <img className="w-full h-auto block" src={product?.prod_img} alt="" />
            //     <div className='p-3'>
            //       <p className='font-bold p-1 bg-[#252525] text-white/60 w-[100px] rounded-md'>{morale.category}</p>
            //       <h1 className='text-2xl'>{morale.prod_name}</h1>
            //       <p className='font-bold text-2xl'>{morale.prod_price}</p>
            //       <button className='p-2 px-3 mt-3 bg-yellow uppercase font-bold text-black'>Add To Cart</button>
            //     </div>
            // </div>   
        ))}
        </div>
    </>
  )
}

export default Products