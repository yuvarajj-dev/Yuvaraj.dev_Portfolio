import "./Home.css";
import Blob from "./Profile Blob effect/Blob";


export default function () {

  return (
    <>
      <div className="bg">
        <div className="container xl:mx-auto xl:px-52 xl:py-16 xl:flex
                                  lg:mx-auto lg:px-32 lg:py-16 lg:flex
                                  md:py-16 md:mx-auto
                                  py-10  mx-auto
        ">
          {/* blog div for sm-md */}
          <div className="xl:hidden
                          lg:hidden  
                          md:block md:pb-10   
                          sm:block  
                          mx-auto        
          ">
            <Blob />
          </div>

          {/* text-div for all */}
          <div className="hero-text-div w-full self-center
                                        md:w-full        
          ">
            <div className="relative flex justify-center py-5 w-2/2 ">
              <p className="text-3xl font-bold text-center 
                            md:text-4xl md:font-bold md:py-2 md:text-center md:w-1/2 md:mx-auto
                            lg:text-5xl lg:font-bold lg:py-5 lg:text-start lg:w-full 
                            xl:text-5xl xl:font-bold xl:py-5 
                            ">
                Front-End React Developer
              </p>
            </div>
            <p className="xl:text-xl xl:pb-3 
                          lg:text-xl lg:pb-3 lg:w-full lg:text-start
                          md:text-lg md:text-center md:w-1/1 md:mx-auto
                          text-center 
            ">Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Tamilnadu, India. 📍</p>
            <div className="xl:flex xl:gap-6 xl:items-center
                            lg:flex lg:gap-6 lg:items-center lg:justify-start
                            md:flex md:gap-6 md:items-center md:justify-center md:py-2
                            flex gap-3 justify-center py-2
            ">
              <img src="./Assest/gif/icons8-linkedin.gif" alt="LinkedIn Icon" width="40" height="50" />
              <img src="./Assest/gif/icons8-github.gif" alt="git Icon" width="40" height="50" />
            </div>
          </div>


          {/* blob div for lg-xl */}
          <div className="xl:w-1/2 xl:items-center xl:block
                          lg:w-1/2 lg:px-28 lg:block
                          hidden               
          ">
            <Blob />
          </div>
        </div>
      </div>
    </>
  )
}
