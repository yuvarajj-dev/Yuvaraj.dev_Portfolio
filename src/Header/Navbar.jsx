import React, { useState } from 'react';
import "./Navbar.css";
import Anime from './TextAnime/Anime';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  const Project = (projectSection,event) => {
    event.preventDefault();
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className=" navbar  lg:py-4 sm:py-4  py-1 px-5 sm:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className='cursor-pointer'> <Anime /> </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className=" focus:outline-none toggle focus:border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 256 256"
              >
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                  <g transform="scale(4,4)">
                    <path d="M54,16.5c0,1.24 -0.5,2.37 -1.32,3.18c-0.81,0.82 -1.94,1.32 -3.18,1.32h-35c-2.49,0 -4.5,-2.01 -4.5,-4.5c0,-1.18 0.45,-2.26 1.21,-3.06c0.03,-0.04 0.07,-0.08 0.11,-0.12c0.81,-0.82 1.94,-1.32 3.18,-1.32h35c2.49,0 4.5,2.01 4.5,4.5z" fill="#02b9d4"></path>
                    <path d="M36,12c0,2.76 -2.24,5 -5,5h-15c-1.38,0 -2.63,-0.56 -3.54,-1.46c-0.57,-0.58 -1.01,-1.3 -1.25,-2.1c0.03,-0.04 0.07,-0.08 0.11,-0.12c0.81,-0.82 1.94,-1.32 3.18,-1.32z" fill="#ffffff" opacity="0.3"></path>
                    <ellipse cx="32" cy="61" rx="20" ry="3" fill="#000000" opacity="0.3"></ellipse>
                    <path d="M49.5,51h-35c-2.485,0 -4.5,-2.015 -4.5,-4.5v0c0,-2.485 2.015,-4.5 4.5,-4.5h35c2.485,0 4.5,2.015 4.5,4.5v0c0,2.485 -2.015,4.5 -4.5,4.5z" fill="#02b9d4"></path>
                    <path d="M49.5,36h-35c-2.485,0 -4.5,-2.015 -4.5,-4.5v0c0,-2.485 2.015,-4.5 4.5,-4.5h35c2.485,0 4.5,2.015 4.5,4.5v0c0,2.485 -2.015,4.5 -4.5,4.5z" fill="#02b9d4"></path>
                    <path d="M49.5,42h-2.98c-0.08,0.89 0.08,1.79 0.45,2.59c0.31,0.66 -0.18,1.41 -0.9,1.41h-9.07c-2.76,0 -4.99,2.23 -5,5h17.5c1.24,0 2.37,-0.5 3.18,-1.32c0.82,-0.81 1.32,-1.94 1.32,-3.18c0,-2.49 -2.01,-4.5 -4.5,-4.5z" fill="#000000" opacity="0.15"></path>
                    <path d="M20.5,17h-4c-0.829,0 -1.5,-0.671 -1.5,-1.5c0,-0.829 0.671,-1.5 1.5,-1.5h4c0.829,0 1.5,0.671 1.5,1.5c0,0.829 -0.671,1.5 -1.5,1.5z" fill="#ffffff"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div className={`lg:flex hidden`}>
            <a href="#" className="nav-items" onClick={() => { Project(document.getElementById('Home-secion')) }}>
              Home
            </a>
            <a href="#" className="nav-items" onClick={() => { Project(document.getElementById('About-secion')) }}>
              About
            </a>
            <a href="#" className="nav-items" onClick={() => { Project(document.getElementById('Project-secion')) }}>
              Project
            </a>
            <a href="#" className="nav-items" onClick={() => { Project(document.getElementById('Resume-secion')) }}>
              Resume
            </a>
            <a href="#" className="nav-items" onClick={() => { Project(document.getElementById('Contact-secion')) }}>
              Contact
            </a>
          </div>
        </div>
      </nav>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={toggleMenu}
        ></div>
      )}


      <div
        className={`fixed inset-y-0 right-0 nav-res-div  w-80 p-4 z-50 transform transition-transform ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={toggleMenu}
          className=" focus:outline-none focus:border-none"
        >
          ✕
        </button>
        <div className='text-center pt-10'>
          <a href="#" className="nav-items block" onClick={() => { Project(document.getElementById('Home-secion')) }}>
            Home
          </a>
          <a href="#" className="nav-items  block " onClick={() => { Project(document.getElementById('About-secion')) }}>
            About
          </a>
          <a href="#" className="nav-items  block" onClick={() => { Project(document.getElementById('Project-secion')) }}>
            Project
          </a>
          <a href="#" className="nav-items  block" onClick={() => { Project(document.getElementById('Resume-secion`')) }}>
            Resume
          </a>
          <a href="#" className="nav-items  block" onClick={() => { Project(document.getElementById('Contact-secion')) }}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
