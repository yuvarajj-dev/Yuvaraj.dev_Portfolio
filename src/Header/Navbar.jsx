import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <div className=''>
                <nav className="bg-white border-gray-200 dark:bg-blue-100">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <h1 className=' head text-black font-bold'>Yuvaraj.dev</h1>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <button className='button' >
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                <span>Resume</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
