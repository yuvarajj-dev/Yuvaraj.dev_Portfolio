import React from 'react'
import TechIcon from './TechData'
import "./Tech.css"

export default function Tech() {
    return (
        <>
            <div className='xl:flex xl:items-center xl:gap-2 xl:justify-center
                            lg:flex lg:items-center lg:gap-2 lg:justify-center
                              '>
                <div className='xl:flex lg:flex xl:gap-2 lg:gap-2
                                md:text-xl tech-text '>
                    <p className='xl:text-xl lg:text-xl ' >Tech Stack</p>
                    <p className='hidden xl:block lg:block'>|</p>
                </div>
                <div className='xl:flex xl:gap-5
                                lg:flex lg:gap-5 
                                grid grid-cols-4 gap-2  md:w-1/2 sm:w-1/2 w-10/12  text-icons   '>
                    {
                        TechIcon.map((val) => (
                            <img src={val.icon_path} alt={val.icon_name} className='icons' />
                        ))
                    }
                </div>

            </div>
        </>
    )
}
