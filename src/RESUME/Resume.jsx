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
            <div id='Resume-secion'>
                <div  className='Resume'>
                    <h1 className='text-center lg:text-3xl text-2xl font-bold relative sm:-bottom-16  -bottom-10 pt-10'>RESUME SECTION</h1>
                    <Spline scene="https://prod.spline.design/1mz13dbJqx1ews-g/scene.splinecode" />
                </div>
                <div className='btn-div'>
                    <button onClick={() => { handleDownload() }} className='btn'>Resume Here</button>
                </div>
            </div>
        </>
    )
}



