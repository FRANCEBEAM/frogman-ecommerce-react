import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({showLinks}) => {
    
    const [clickBars, setClickBars] = useState(false);
    const handleClickBars = ()=> setClickBars(!clickBars);
    const closeMobileMenu = () => setClickBars(false)

    const location = useLocation();
    const isSignInPage = location.pathname === '/signin';

    const isSignUpPage = location.pathname === '/signup';



  return (
    <div 
        className={`w-full bg-[#000000]/80 fixed p-4 py-6 z-[999] 
            ${isSignInPage || isSignUpPage ? 'bg-transparent fixed p-4 my-6 z-[999]' : '' }`
        }>
        
    <div className='flex items-center justify-between w-full lg:max-w-[1200px] lg:m-auto lg:flex lg:items-center lg:justify-between'>
        <div className='cursor-pointer'>
            <Link to='/' onClick={closeMobileMenu}>
                <img className='w-[140px]' src="assets/Frogmanlogo.svg" alt="frogman-logo" />
            </Link>
        </div>

        <div>
            <div className={`'cursor-pointer lg:hidden ${isSignInPage || isSignUpPage ? 'hidden' : ''}`} onClick={handleClickBars}>
                { clickBars ? <FaTimes size={30} color='white' /> : <FaBars size={30} color='white' /> }
            </div>
            { showLinks && (
            <ul className={clickBars ? 'w-full h-[300px] absolute bg-[#000000] justify-center text-white font-medium uppercase left-0 top-[84px] text-center pt-10 transition-all duration-300 active': 'absolute top-[-600%] w-full left-0 text-center transition-all duration-300 uppercase lg:top-0 lg:flex right-0 lg:text-white lg:text-lg  gap-9 lg:relative lg:right-0'}>
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-yellow lg:hover:bg-transparent lg:text-base '>
                    <Link to='/' onClick={closeMobileMenu}>
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
                <li className='font-medium tracking-wider py-3 hover:text-red hover:bg-yellow cursor-pointer lg:hover:text-black lg:text-base lg:text-black lg:font-bold lg:bg-yellow lg:hover:bg-yellow/90 lg:px-6 lg:rounded-md'>
                    <Link to='/signin' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
            )}
        </div>
    </div>
    </div>
  )
}

export default Navbar