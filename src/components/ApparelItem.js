import { useState } from 'react'
import { Apparels } from './ProductsReq';
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ApparelItem = () => {

  const [heartClick, setHeartClick] = useState(false)
  const handleHeartCick = () => setHeartClick(!heartClick)

  const [cartClick, setCartClick] = useState(false)
  const handleCartClick = () => setCartClick(!cartClick)


  const truncate = (prodName, maxLength) =>{
      if (prodName.length > maxLength) {
          return `${prodName.slice(0, maxLength)} ...` 
      }
      return prodName;
  }

  return (
    <>
        {
            Apparels.map((apparel, id) => (
              <div className='w-full sm:w-[470px] h-full relative p-3 inline-block text-white' key={id}>
                <Link to={apparel.link}>
                  <div className='group hover:opacity-50'>
                    <p className='z-50 text-center absolute hidden group-hover:flex gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      {
                        heartClick ? <FaHeart className='mx-auto cursor-pointer text-white' size={30} onClick={handleHeartCick}/> : <FaRegHeart className='mx-auto cursor-pointer text-white' size={30} onClick={handleHeartCick}/> 
                      }
                      {
                        cartClick ? <RiShoppingCart2Fill className='mx-auto cursor-pointer text-white' size={30} onClick={handleCartClick} />: <RiShoppingCart2Line className='mx-auto cursor-pointer text-white' size={30} onClick={handleCartClick} />
                      }
                    </p>
                    <img className="w-auto h-auto" src={apparel.prod_img} alt="" />
                    <h1 className='text-white text-2xl font-bold uppercase lg:text-3xl'>{ truncate(apparel.prod_name,26) }</h1>
                    <p className='text-white text-base uppercase lg:text-lg'>{ truncate(apparel.prod_details, 50) }</p>
                  </div>
                </Link>
              </div>
            ))
        }
    </>
  )
}

export default ApparelItem