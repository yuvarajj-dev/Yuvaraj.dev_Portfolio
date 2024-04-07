import React from 'react'
import "./Footer.css"

export default function Footer() {
    const handlelinked = () => {
        window.open("https://www.linkedin.com/in/jyuvaraj", "_blank");
    }
    const handlegithub = () => {
        window.open("https://github.com/yuvarajj-dev", "_blank");
    }
    return (
        <>
            <div className='footer text-white'>
                <div className='content md:flex  md:justify-between py-5  '>
                    <p className='md:text-lg text-sm '>Copyright © 2024. All rights are reserved</p>
                    <div className=' my-5 items-center justify-center md:justify-start md:items-start md:my-0 flex gap-5'>
                        <svg
                            className='hover:fill-blue-500 cursor-pointer'
                            onClick={()=>{handlelinked()}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802A2.573 2.573 0 0 1 4.57 7.1a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z"
                            />
                        </svg>
                        <svg
                            className='hover:fill-blue-500 cursor-pointer'
                            onClick={()=>{handlegithub()}}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            strokeWidth="2"
                        >
                            <g clipPath="url(#clip0_100_4)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_100_4">
                                    <rect width="24" height="24" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
