/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
    return (
        <nav className=' text-white fixed w-full bg-black bg-opacity-20 z-40'>
            <div className='mx-12 my-6 flex items-center justify-between'>
                <a className='flex items-center justify-center text-3xl gap-3' href="/"><img src="/laere-logo.svg" alt="laere-logo" className='w-12' /> Laere.id</a>
                <ul className=' flex'>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>Home</li></a>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>Products</li></a>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>Contacts</li></a>
                </ul>
                <button>Id<ArrowDropDownIcon /></button>
            </div>
        </nav>
    )
}
