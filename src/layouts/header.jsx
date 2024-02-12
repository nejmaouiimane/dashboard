import React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <>
            <div className='W-[100vw] h-[7vh] flex bg-black text-white justify-evenly'>
                <h1>LOGO</h1>
                <div className='flex w-[55vw] justify-evenly'>
                <Link className=' text-xl no-underline' to={'/'}>Home</Link>
                <Link className=' text-xl no-underline'to={'/about'}>About</Link>
                <Link className=' text-xl no-underline'to={'/about'}>Prices</Link>
                <input className='border-2 border-black rounded-lg px-3 py-2' placeholder=' serach ..' type="text" />
                </div>
            </div>
        </>
    )
}