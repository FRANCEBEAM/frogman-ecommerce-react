import { useRef } from 'react'
import PrintProduct from './PrintProduct'
import Patches from './Patches'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { handleScrollLeft, handleScrollRight } from './SliderUtils'

const Prints = () => {

  const sliderRef = useRef(null);

  return (
    <>
      <img className='w-full h-[1210px] sm:h-[960px] absolute opacity-30 object-cover' src="../assets/bg-1.jpg" alt="Limited Edition"/>

      <div className='w-full h-full relative pt-6 lg:m-auto z-10'>
        <div className='w-full h-full m-auto min-h-screen p-4 self-center lg:text-left lg:max-w-[1200px] lg:m-auto lg:justify-start'>

            <div className='text-white w-full uppercase lg:m-auto'>
              <h1 className='text-4xl uppercase font-bold lg:text-5xl'>Limited Edition Print</h1>
              <p className='text-base lg:text-lg'>28 Units | Hand Numbered + Signed</p>
            </div>

            <div className='pt-10'>
              <PrintProduct />
            </div>

            <div className='relative items-center flex'>
              <IoIosArrowDropleftCircle 
                className="hidden sm:block absolute z-10 left-0 cursor-pointer text-white/30 hover:text-white" 
                size={40} 
                onClick={()=>handleScrollLeft(sliderRef)} />
                <div className='pt-10 whitespace-nowrap overflow-x-scroll relative w-full scrollbar-hide' ref={sliderRef}>
                  <Patches />
                </div>
              <IoIosArrowDroprightCircle 
                className="hidden sm:block absolute z-10 right-0 cursor-pointer text-white/30 hover:text-white" 
                size={40} 
                onClick={()=>handleScrollRight(sliderRef)} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Prints