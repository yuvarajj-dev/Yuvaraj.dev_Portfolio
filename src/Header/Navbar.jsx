import React from 'react'
import "./Navbar.css"
import Anime from './TextAnime/Anime'

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-black dark:border-gray-600">
          <ul className="navigation container  flex flex-wrap justify-between items-center relative mx-auto px-8 py-8">
            <a className="logo" href="#">
              <div><Anime/></div>
            </a>
            <input type="checkbox" id="check" />

            <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
              <li><a className='nav-items' href="#">Home</a></li>
              <li><a className='nav-items' href="#">About</a></li>
              <li><a className='nav-items' href="#">Projects</a></li>
              <li><a className='nav-items' href="#">Resources</a></li>
              <li><a className='nav-items' href="#">Contact</a></li>

              <label htmlFor="check" className="close-menu">X</label>
            </span>

            <label htmlFor="check" className="open-menu ">Menu</label>
          </ul>
        </nav>
      </header>
    </>
  )
}