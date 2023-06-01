import React from 'react'
import { Link } from 'react-router-dom'
import VideoBg from './VideoBg'


const Hero = () => {
  return (
    <>
    <VideoBg />
    <div className='w-full lg:max-w-[1200px] lg:m-auto'>
        <div className='w-full absolute top-[120px] m-auto lg:p-4 text-center self-center lg:text-left lg:max-w-[1200px] lg:m-auto lg:justify-start'>
            <div className='w-full p-2 m-auto top-[160px] lg:m-auto'>
                <h3 className='text-white/60 text-1xl uppercase font-bold lg:text-2xl 2xl:text-3xl'>the World of Tactical Excellence</h3 >
                <h1 className='text-white text-6xl uppercase font-bold lg:text-7xl 2xl:text-8xl'>black powder red earth</h1>
                <p className='tracking-wider text-white text-base py-5 max-w-[460px] justify-center m-auto lg:m-0'>Immerse yourself in the art of black powder warfare and redefine the way you approach combat. Our platform is designed to empower tactical operators, enthusiasts, and strategists alike, providing you with the knowledge, resources, and gear to excel on the battlefield.</p>
            </div>
            
            <div className='flex py-2 font-bold items-center gap-5 text-lg m-auto w-full justify-center lg:justify-start'>
                <div className='border-2 border-yellow p-1'>
                    <button className='bg-yellow hover:bg-yellow/80 p-2 px-6 text-black uppercase'>
                            Play Free
                    </button>
                </div>
                <div className='text-white underline uppercase'>
                    <Link to='/'>
                        Read Novels
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero