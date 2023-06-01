import { useRef } from 'react'
import ApparelItem from './ApparelItem'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { handleScrollLeft, handleScrollRight } from './SliderUtils';



const Apparels = () => {
  const sliderRef = useRef(null);
  
  return (
    <div className='w-full h-full bg-[#000000] p-4'>
        <div className='w-full h-full block mg-auto lg:max-w-[1200px] lg:m-auto'>
            <div className='py-5 uppercase'>
                <h1 className='text-4xl text-white font-bold'>Cold Harbor Special Objects Group Apparel</h1>
                <p className='text-2xl text-white'>Apparel & Shirts</p>
            </div>

            <div className='relative items-center flex'>
              <IoIosArrowDropleftCircle 
                className="hidden sm:block absolute z-10 left-0 cursor-pointer text-white/30 hover:text-white" 
                size={40} 
                onClick={() => handleScrollLeft(sliderRef)} />
                <div className='pt-10 sm:whitespace-nowrap overflow-x-scroll relative w-full scrollbar-hide' ref={sliderRef}>
                  <ApparelItem />
                </div>
              <IoIosArrowDroprightCircle 
                className="hidden sm:block absolute z-10 right-0 cursor-pointer text-white/30 hover:text-white" 
                size={40} 
                onClick={() => handleScrollRight(sliderRef)} />
            </div>
            
        </div>
    </div>
  )
}

export default Apparels