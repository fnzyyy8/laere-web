import React from 'react'
import style from './home.module.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ApiIcon from '@mui/icons-material/Api';

export default function AboutSection() {
    return (
        <section className=' bg-gradient-to-b from-black to-purple-950 flex justify-center'>
            <div className={`flex flex-col items-center w-full ${style.home_container}`}>
                <div className='text-white max-w-4xl flex flex-col items-center text-center'>
                    <h2 className='part_title'>Our Methodology</h2>
                    <p className='mt-3 leading-relaxed text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit dignissimos esse eaque placeat quos quibusdam. Obcaecati reprehenderit a repellendus maxime modi sequi provident quas eius, incidunt quo consectetur debitis!</p>
                </div>
                <div className='grid grid-cols-3 gap-12 justify-between w-full items-center mt-12'>
                    <div className='group bg-slate-100 h-[580px] rounded-2xl p-6 relative z-0 hover:text-white hover:bg-black cursor-pointer'>
                        <div>
                            <AssignmentIcon fontSize='inherit' color='inherit' className='text-[72px] text-purple-600 group-hover:text-white' />
                        </div>
                        <div className='absolute bottom-0 pb-6'>
                            <h2 className='text-2xl font-bold'>Planning</h2>
                            <p className='max-w-sm leading-loose mt-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi!</p>
                        </div>
                    </div>
                    <div className='group bg-slate-100 h-[580px] rounded-2xl p-6 relative z-0 hover:text-white hover:bg-black cursor-pointer'>
                        <div>
                            <DesignServicesIcon fontSize='inherit' color='inherit' className='text-[72px] text-purple-600 group-hover:text-white' />
                        </div>
                        <div className='absolute bottom-0 pb-6'>
                            <h2 className='text-2xl font-bold'>Designing</h2>
                            <p className='max-w-sm leading-loose mt-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi!</p>
                        </div>
                    </div>
                    <div className='group bg-slate-100 h-[580px] rounded-2xl p-6 relative z-0 hover:text-white hover:bg-black cursor-pointer'>
                        <div>
                            <CodeIcon fontSize='inherit' color='inherit' className='text-[72px] text-purple-600 group-hover:text-white' />
                        </div>
                        <div className='absolute bottom-0 pb-6'>
                            <h2 className='text-2xl font-bold'>Developing</h2>
                            <p className='max-w-sm leading-loose mt-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi!</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-12 gap-12 w-full justify-end'>
                    <div className='group bg-slate-100 h-[580px] rounded-2xl p-6 relative z-0 hover:text-white hover:bg-black cursor-pointer'>
                        <div>
                            <FactCheckIcon fontSize='inherit' color='inherit' className='text-[72px] text-purple-600 group-hover:text-white' />
                        </div>
                        <div className='absolute bottom-0 pb-6'>
                            <h2 className='text-2xl font-bold'>Hello World</h2>
                            <p className='max-w-sm leading-loose mt-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi!</p>
                        </div>
                    </div>
                    <div className='group bg-slate-100 h-[580px] rounded-2xl p-6 relative z-0 hover:text-white hover:bg-black cursor-pointer'>
                        <div>
                            <ApiIcon fontSize='inherit' color='inherit' className='text-[72px] text-purple-600 group-hover:text-white' />
                        </div>
                        <div className='absolute bottom-0 pb-6'>
                            <h2 className='text-2xl font-bold'>Hello World</h2>
                            <p className='max-w-sm leading-loose mt-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sequi!</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
