import React from 'react'

export default function Navbar() {
    return (
        <>
            <div>
                <nav className="bg-white border-gray-200 dark:bg-blue-100">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <h1 className='text-3xl text-black font-bold'>Yuvaraj.dev</h1>
                        
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <button className="bg-blue-300 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
