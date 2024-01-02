import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function HeroSection() {
    return (
        <section className='h-screen bg-gradient-to-b from-slate-800 to-black flex items-center justify-center text-white'>
            <div className='text-center flex flex-col justify-center items-center'>
                <div className='mb-6 py-2 px-6 bg-slate-100 text-black font-bold text-sm rounded-2xl'><p>We host more then 120,000 websites</p></div>
                <h1 className='text-6xl font-black'>Your Digital Marketing Wizard</h1>
                <div className='max-w-2xl mt-6 leading-loose'>
                    <p className='text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatum rem provident reprehenderit officia earum aspernatur minus ab qui quia.</p>
                </div>
                <div className='mt-6'>
                    <button className='bg-slate-50 p-2 w-48 h-16 rounded-xl mx-3 gap-4 text-black hover:bg-purple-500 hover:font-bold'>Let&apos;s Explore <LanguageIcon /></button>
                    <button className='border-t-2 border-x-2 p-2 w-48 h-16 rounded-xl mx-3 hover:bg-slate-900'>Contact</button>
                </div>
                <div className='mt-16 flex gap-12'>
                    <a href="/" className='flex gap-2 hover:text-purple-500'><FacebookIcon /> Facebook</a>
                    <a href="/" className='flex gap-2 hover:text-purple-500'><InstagramIcon /> Instagram</a>
                    <a href="/" className='flex gap-2 hover:text-purple-500'><LinkedInIcon /> Linked In</a>
                    <a href="/" className='flex gap-2 hover:text-purple-500'><TwitterIcon /> Twitter</a>
                </div>
            </div>
        </section>
    )
}
