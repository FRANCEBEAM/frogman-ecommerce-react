import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='w-full h-full pt-[300] bg-[#000000]'>
            <div className='w-full h-full m-auto p-4 sm:max-w-[1200px]'>
                <div className='w-full h-full md:grid md:grid-cols-2 py-12'>
                    {/* LEFT CONTENT */}
                    <div className='w-full h-full'>
                        <img className='w-[130px]' src="assets/Frogmanlogo.svg" alt="frogman" />
                        <p className='text-white text-base pt-3 max-w-[360px]'>Our website combines the thrill of gaming with the passion for collecting and painting miniatures, creating an immersive experience for hobbyists and gamers alike.</p>
                    <div className='md:flex md:gap-6 lg:gap-20 py-10'>

                    <ul className='text-white uppercase'>
                        <h1 className='font-bold text-2xl py-2'>Merch</h1>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                Morale Patches
                            </Link>
                        </li>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                Sticker Patches
                            </Link>
                        </li>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                Apparel & Shirts
                            </Link>
                        </li>
                    </ul>
                    <ul className='text-white uppercase'>
                        <h1 className='font-bold text-2xl py-2'>Miniature</h1>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                PMC Scorch Troop
                            </Link>
                        </li>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                Ayari Guard Troop
                            </Link>
                        </li>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                Apparel & Shirts
                            </Link>
                        </li>
                    </ul>
                    <ul className='text-white uppercase'>
                        <h1 className='font-bold text-2xl py-2'>Game Rules</h1>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                The Basics
                            </Link>
                        </li>
                        <li className='py-2 text-base'>
                            <Link to='/'>
                                Unit Role
                            </Link>
                        </li>
                    </ul>
                    </div>
                    </div>

                    {/* RIGHT-CONTENT */}
                    <div>
                        <form>
                            <div className='flex gap-4 outline-none md:justify-end'>
                                <input className='p-2 px-7' type="email" />
                                <button className='bg-white p-2 px-3 uppercase font-bold hover:bg-white/80'>Subscribe</button>
                            </div>
                        </form>
                        <div className='w-full py-6'>
                            <ul className='flex gap-4 md:justify-end'>
                                <li>
                                    <Link to='/'>
                                        <FaFacebook size={26} color='white'/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaTwitter size={26} color='white'/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaInstagram size={26} color='white'/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <FaYoutube size={26} color='white'/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full border-t-2 border-white/30'>
                    <div className='text-white uppercase pt-10'>
                        <ul className=' flex gap-5 md:gap-10'>
                            <li className='font-bold text-1xl'>
                                <Link to='/'>
                                    Support
                                </Link>
                            </li>
                            <li className='font-bold text-1xl'>
                                <Link to='/'>
                                    Terms Of Use
                                </Link>
                            </li>
                            <li className='font-bold text-1xl'>
                                <Link to='/'>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                        <p className='py-4'>COPYRIGHT © 2022 FRANCE BEAM</p>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Footer