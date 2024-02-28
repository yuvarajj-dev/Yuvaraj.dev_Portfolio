import { useEffect } from "react";
import "./Header.css";

export default function Header() {


  useEffect(() => {
    const nav_bar = document.querySelector(".nav_bar");
    const handleclick = (e) => {
      if (e.target.id === 'close') {
        nav_bar.classList.remove('active');
      } else {
        nav_bar.classList.add('active');
      }
    }

    nav_bar.addEventListener("click", handleclick);

  }, [])


  return (
    <>
      <div className="main">
        <div className="nav_bar">
          <button id="close">&times;</button>
          <h3 className="logo">Yuvaraj J</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
            <img src="./Assest/Down arrow icon/download-svgrepo-com.svg" className='arrow' alt="arrow" />
        </div>

      </div>

    </>
  )
}
