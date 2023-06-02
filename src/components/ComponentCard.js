import React from 'react'

const ComponentCard = ({head, src, desc, truncate}) => {
  return (
    <>
        <div className='max-w-[280px] h-full block relative bg-[#000000] p-4'>
            <h1 className='text-white text-2xl uppercase font-bold text-center'>{head}</h1>   
            <div className='mt-3'>
                <img className='w-full h-auto inline-block' src={src} alt="component 1" />
            </div>   
            <p className='text-white text-base mt-3'>{truncate(desc, 200)}</p>  
            <button className='bg-red p-2 mt-3 px-3 uppercase font-bold text-white inline-block w-full hover:bg-red/70'>View More</button>    
        </div>
    </>
  )
}

export default ComponentCard