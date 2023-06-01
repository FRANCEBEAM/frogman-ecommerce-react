import React from 'react'
import { Link } from 'react-router-dom'

const TroopsCard = ({img, hypernotes, subhead, link, para_text1, para_text2, notes_img1, notes_img2, notes_img3, notes_img4}) => {
  return (
    <>
    {/* EMBER */}
    <div className='w-full h-full m-auto relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-1'>
        <div className='max-w-[450px] py-10 lg:max-w-[520px]'>
            <Link to={link}>
                <img className='w-full h-auto m-auto' src={img} alt="hypernotes" />
            </Link>
        </div>
        <div>
            <div className='w-[220px] bg-red p-2'>
                <h1 className='text-2xl text-white uppercase font-bold'>{hypernotes}</h1>
            </div>
            <h1 className='text-2xl text-white uppercase font-bold pt-4 lg:text-3xl'>{subhead}</h1>
            <p className='text-white text-base py-3'>
                {para_text1}
            </p>
            <p className='text-white text-base py-3'>
                {para_text2}
            </p>
        </div>
        
    </div>

    <div className='hidden w-full lg:flex lg:flex-wrap lg:pt-10 lg:gap-5 lg:justify-center'>
        <div>
            <img className='max-w-[277px] h-auto block' src={notes_img1} alt="Ember content 1" />
        </div>
        <div>
            <img className='max-w-[277px] h-auto block' src={notes_img2} alt="Ember content 2" />
        </div>
        <div>
            <img className='max-w-[277px] h-auto block' src={notes_img3} alt="Ember content 3" />
        </div>
        <div>
            <img className='max-w-[277px] h-auto block' src={notes_img4} alt="Ember content 4" />
        </div>
    </div>
    </>
  )
}

export default TroopsCard