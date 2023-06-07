import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
        <div className='w-full h-full'>
        <div className="w-full h-full absolute inline-block bg-gradient-to-r from-[#000000]/90 z-[1]"></div>
            <img className='absolute hidden sm:inline-block object-cover w-full h-full opacity-40' src="assets/bg-3.jpg" alt="" draggable='false' />
            
            <div className='w-full sm:w-[442px] h-auto sm:bg-[#000000]/80 p-10 m-auto justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl z-[2]'>
                <form>
                    <h1 className='text-white text-3xl font-bold text-center'>Login to Your Account</h1>
                    <div className='my-14'>
                        {/* <span className='text-red'>Email or password incorrect</span> */}
                        <div className='gap-7 flex flex-col pt-2'>
                            <input className='bg-[#222222] text-base text-white p-3' type="email" placeholder='Enter email or username'/>
                            <input className='bg-[#222222] text-base text-white p-3' type="password" placeholder='Enter password'/>
                        </div>
                    </div>
                    <button className='my-7 p-3 flex w-full text-black text-2xl bg-yellow text-center font-bold justify-center rounded-md hover:bg-yellow/80'>Sign In</button>
                    <p className='text-white text-center'>Don't have an account? <Link className='font-bold' to='/signup'>Sign up now</Link></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignIn