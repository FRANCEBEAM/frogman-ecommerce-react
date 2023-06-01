import React from 'react'
import { Link } from 'react-router-dom'

const PrintProduct = () => {
  return (
    <div className='max-w-[360px] m-auto sm:flex sm:max-w-full'>
            <div className='p-1'>
                <Link to='#'>
                    <img className="w-full h-auto block" src="../assets/moralepatches.jpg" alt="" />
                </Link>   
            </div>
            <div className='p-1'>
                <Link to='#'>
                    <img className="w-full h-auto block" src="../assets/stickerpack.jpg" alt="" />
                </Link>   
            </div>
            <div className='p-1'>
                <Link to='#'>
                    <img className="w-full h-auto block" src="../assets/apparelshirts.jpg" alt="" />
                </Link>   
            </div>
    </div>
  )
}

export default PrintProduct