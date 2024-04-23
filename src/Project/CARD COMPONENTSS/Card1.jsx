import React from 'react'
import "./CARD.css"
import "animate.css"

export default function Card1(props) {

    const handleproject = (url)=>{
        window.open(props.url,"_blank");
    }
    return (
        <>
            <div className='Card panel flex flex-col justify-center items-center'>
                <div className='text-center relative  -top-10 mt-5'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl hover:text-blue-400  font-bold underline'>{props.section}</h1>
                </div>
                <div onClick={()=>{handleproject()}} className='flex justify-center cursor-pointer  items-center '>
                    <div className="card-div  xl:flex lg:flex xl:justify-center lg:justify-center xl:items-center lg:items-center xl:p-5 p-5 ">
                        <div className='card-text xl:w-1/2 w-1/2 xl:p-5 p-5 '>
                            <h1 className='xl:text-2xl xl:font-bold lg:text-2xl lg:font-bold sm:text-sm  font-bold'>{props.title}</h1>
                            <p className='' >{props.des}</p>
                        </div>
                        <div className="card-img shadow-lg  flex justify-center items-center xl:w-1/2 w-1/2 ">
                            <img src={props.img} alt={props.alt} className='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
