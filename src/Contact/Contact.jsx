import React from 'react'
import "./Contact.css"


export default function Contact() {
    const HandleEmail = () => {
            window.open(`https://mail.google.com/mail/u/0/#inbox`,"_blank")
    }
    return (
        <>
            <div id='Contact-secion' className="Contact-main">
                <div className="contact xl:py-20">
                    <h1 className='font-bold text-3xl text-blue-400 py-4'>Contact</h1>
                    <p className='font-bold text-2xl pb-4'>Don't be shy! Hit me up! 👇</p>
                    <div className='xl:flex lg:flex md:flex w-92 gap-4 py-5 '>
                        <div className='map py-2 md:py-0'>
                            <div >
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="rgb(10, 150, 243)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg></span>
                            </div>
                            <div className='md:text-lg text-sm font-semibold'>
                                <p>Location</p>
                                <p>TamilNadu, India</p>
                            </div>
                        </div>
                        <div className="mail">
                            <div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="rgb(10, 150, 243)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg></span>
                            </div>
                            <div className='md:text-lg text-sm font-semibold'>
                                <p>Mail</p>
                                <p onClick={()=>{HandleEmail()}} className='hover:text-blue-400 cursor-pointer'>yuvarajj.developer@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
