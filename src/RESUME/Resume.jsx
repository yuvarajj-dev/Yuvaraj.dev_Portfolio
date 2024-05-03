import React from 'react'
import "./Resume.css";
import Spline from '@splinetool/react-spline';

export default function Resume() {
    function handleDownload() {
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "./YUVARAJ.pdf";
        link.download = "YUVARAJ.pdf";
        link.click();
    }
    return (
        <>
            <div className="Resume-main">
                <h1 className='lg:text-3xl text-2xl font-bold text-center'>Resume Section</h1>
                <div className='Resume'>
                    <Spline className='robot' scene="https://prod.spline.design/F9cNTA6VilbU-ZtT/scene.splinecode" />
                </div>
                <div className='btn-div'>
                    <button onClick={() => { handleDownload() }} className='btn'>Resume Here</button>
                </div>
            </div>
        </>
    )
}



