import "./Home.css";
import Blob from "./Profile Blob effect/Blob";


export default function () {

  return (
    <>
      <div className="bg">
        <div className="container mx-auto lg:px-36 xl:flex lg:flex justify-between py-16  ">
        <div className="lg:w-1/2 xl:w-1/2 lg:hidden xl:hidden mx-auto">
              <Blob />
          </div>
          <div className="hero-text-div lg:w-1/2 xl:w-1/2 md:text-center ">
            <div className="">
              <p className="text-5xl font-bold py-2 relative md:px-16 ">Front-End React Developer<img className="hand-img" src=".\Assest\icons8-waving-hand-light-skin-tone-96.png" alt="wave Icon" width="45" height="55"  /></p>
            </div>
            <p className="py-2 md:px-28">Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Tamilnadu, India. 📍</p>
            <div className="flex gap-5 py-2 md:px-48">
              <img src="./Assest/gif/icons8-linkedin.gif" alt="LinkedIn Icon" width="40" height="50" />
              <img src="./Assest/gif/icons8-github.gif" alt="git Icon" width="40" height="50" />
            </div>
          </div>
          <div className="w-1/2 sm:hidden">
              <Blob />
          </div>
        </div>
      </div>
    </>
  )
}
