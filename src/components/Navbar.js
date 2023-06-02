import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    
    const [clickBars, setClickBars] = useState(false);
    const handleClickBars = ()=> setClickBars(!clickBars);
    const closeMobileMenu = () => setClickBars(false)


  return (
    <div className='w-full bg-[#000000]/80 fixed p-4 py-7  lg:py-4 z-[999]'>
    <div className='flex items-center justify-between w-full lg:max-w-[1200px] lg:m-auto lg:flex lg:items-center lg:justify-between'>
        <div className='cursor-pointer'>
            <Link to='/home' onClick={closeMobileMenu}>
                <img className='w-[127px]' src="./assets/Frogmanlogo.svg" alt="frogman-logo" />
            </Link>
        </div>

        <div>
            <div className='cursor-pointer lg:hidden' onClick={handleClickBars}>
                { clickBars ? <FaTimes size={30} color='white' /> : <FaBars size={30} color='white' /> }
            </div>
            <ul className={clickBars ? 'w-full h-[300px] absolute bg-[#000000] justify-center text-white font-medium uppercase left-0 top-[84px] text-center pt-10 transition-all duration-300 active': 'absolute top-[-600%] w-full left-0 text-center transition-all duration-300 uppercase lg:top-0 lg:flex right-0 lg:text-white lg:text-lg  gap-9 lg:relative lg:right-0'}>
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-yellow lg:hover:bg-transparent lg:text-base '>
                    <Link to='/home' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-yellow lg:hover:bg-transparent lg:text-base '>
                    <Link to='/graphicnovels' onClick={closeMobileMenu}>
                        Graphic Novels
                    </Link>
                </li>
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-yellow lg:hover:bg-transparent lg:text-base '>
                    <Link to='/shop' onClick={closeMobileMenu}>
                        Shop
                    </Link>
                </li>
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-yellow lg:hover:bg-transparent lg:text-base '>
                    <Link to='/gameinfo' onClick={closeMobileMenu}>
                        Game Info
                    </Link>
                </li>
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-black lg:text-base lg:text-black lg:font-bold lg:bg-yellow lg:hover:bg-yellow/90 lg:px-3 lg:rounded-lg' onClick={closeMobileMenu}>
                    <Link>
                        Play Now
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar