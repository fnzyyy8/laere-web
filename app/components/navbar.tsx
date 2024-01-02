/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Navbar() {
    return (
        <nav className=' text-white fixed w-full bg-black bg-opacity-20 z-40'>
            <div className='mx-12 my-6 flex items-center justify-between'>
                <a className='flex items-center justify-center text-3xl gap-3' href="/"><img src="/laere-logo.svg" alt="laere-logo" className='w-12' /> Laere.id</a>
                <ul className=' flex'>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>Home</li></a>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>About us</li></a>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>Corporate</li></a>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>UMKM</li></a>
                    <a href="/" className='mx-6 hover:text-purple-500'><li>School</li></a>
                </ul>
                <button className='border-2 px-6 py-2 rounded-xl border-white hover:bg-slate-800'>Contact</button>
            </div>
        </nav>
    )
}
