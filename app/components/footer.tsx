/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-purple-950'>
            <div className='text-white flex items-center justify-between mx-16 py-16'>
                <div>
                    <a className='flex items-center justify-center text-3xl gap-3' href="/">
                        <img src="/laere-logo.svg" alt="laere-logo" className='w-12' />
                        Laere.id
                    </a>
                </div>
                <div>
                    <p>All rights reserved Laere.id by PT. Tumbuh Nusa Tech 2023</p>
                </div>
            </div>
        </footer>
    )
}
