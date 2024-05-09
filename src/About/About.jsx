import React from 'react';
import "./About.css";
import Spline from '@splinetool/react-spline';
import useScroll from '../SmoothScroll/Smooth';

export default function About() {
  useScroll();
  return (
    <>
      <div id='About-secion ' className='lg:flex js-scroll'>
        <div className='cuib hidden lg:block  w-1/2'>
          <Spline scene="https://prod.spline.design/2wUTHRpca2Z8mEZG/scene.splinecode" />
        </div>
        <div className='image-about'>
          <img src=".\Assest\About.jpg" alt="about" />
        </div>
        <div className='anime-text flex justify-center items-center lg:w-1/2 lg:bg-black '>
          <div className=''>
            <h1 className=' lg:text-4xl font-bold text-lg text-center  lg:text-white hover:text-blue-400'>ABOUT ME 📍 </h1>
            <div className=' lg:text-2xl text-justify lg:text-white anime-para'>
              <p>Front-end Developer based in Tamil Nadu, India </p>
              <p>Hey, my name is Yuvaraj, and I'm a Frontend React Developer. My passion is to create and develop a clean UI/UX for my users.</p>
              <p>My main stack currently is React/Next.js in combination with Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
