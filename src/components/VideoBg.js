import React from 'react'

const VideoBg = () => {
  return (
    <>
        <div className='w-full h-[610px] absolute bg-[#000000]/40 bg-gradient-to-r from-[#000000]'></div>
        <video className='w-full h-[610px] object-cover' src='../assets/videobg.mp4' type="video/mp4" autoPlay loop muted />
    </>
  )
}

export default VideoBg