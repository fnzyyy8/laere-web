import React from 'react'
import style from "./home.module.css"

export default function FeaturesAndPortoSection() {
    return (
        <section className='h-screen bg-gradient-to-b from-purple-950 via-gray-700 to-purple-950'>
            <div className={`text-white pt-16 flex justify-center ${style.home_container}`}>
                <h1 className='part_title'>Top Features</h1>
            </div>
            <div>
                <div></div>
            </div>
        </section>
    )
}
