import React from 'react'
import "./Home.css";

export default function () {
  return (
    <>
      <div className="container px-5 mx-auto lg:px-48 lg:flex md:flex lg:mt-24 self-center">
          <div className='lg:w-1/2 mx-auto lg:py-9 md:py-9 '>
            <div className="hero-text-section ">
                  <h1>Front-End React Developer </h1>
                  <img src="./Assest/icons8-waving-hand-light-skin-tone-96.png" alt="hello-icon" className='hello-icon' />
                  <p>Hi, I'm Yuvaraj J. A passionate Front-end React Developer based in Tamilnadu, India.</p>
                 
            </div>
          </div>
          <div className=' mx-auto'>
            <div className="hero-img-section">
                  <img src="./Assest/profile photo/stefan.webp" alt="hero-img" className='hero-img' />
            </div>
          </div>
      </div>
    </>
  )
}
