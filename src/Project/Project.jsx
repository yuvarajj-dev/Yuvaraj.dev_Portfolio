import React, { useEffect, useState } from 'react';
import "./Project.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card1 from './CARD COMPONENTSS/Card1';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Project() {


  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
        id='Project-secion'
      >
        <SwiperSlide>
          <Card1 url={`https://chennai-digital-prints.vercel.app/`} section={`FREELANCING PROJECT`} title={"SHOP WEBSITE : CHENNAI DIGITAL PRINTS"} des={`"Chennai Digital Prints" utilizes React.js and Tailwind CSS to offer printing services with GSAP animations and Material Design components, ensuring a seamless and professional user experience.`}
            img={`.\\Assest\\CDP.png`} alt={`CHENNAI DIGITAL PRINT`} />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://amazon-ecommerce-gamma.vercel.app/`} section={`First Project`} title={"Amazon E-Commerce "} des={`Amazon E-commerce Project: Leveraged React.js and external APIs to build a robust e-commerce platform, featuring advanced product filtering and seamless add-to-cart functionality, with ongoing enhancements. Demonstrated proficiency in frontend development and responsive design principles.`}
            img={`.\\Assest\\Amazon.png`} alt={`Walk International clone`} />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://walkinternational.vercel.app/`} section={`Second Project`} title={"Walk International clone"} des={`Developed 'Walk International' website from scratch using React.js, ensuring
                                pixel-perfect replication. Enhanced skills in data passing between components.
                                Employed GSAP for animations, Material-UI and PrimeReact for component
                                styling. Leveraged JSON format for resource retrieval, optimizing website
                                performance.`} img={`.\\Assest\\Walkinternaltion.png`} alt={`Walk International clone`} />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://product-filter-in-react.vercel.app/`} section={`Third Project`} title={"E-commerce Product Filter"} des={`Reactive E-commerce: Mastering Product Filtering with React.js and External
                                APIs. Enhanced skills in frontend development, creative CSS designs, and
                                responsive layouts. Demonstrated proficiency in efficiently filtering products
                                from the API.`} img={`.\\Assest\\Filter.png`} alt={`E-commerce Product Filter`} /></SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://registration-form-using-javascript.vercel.app/`} section={`Fourth Project`} title={"Form Validation - Javascript"} des={`Constructed a Registration Form using JavaScript and Tailwind CSS, gaining
                                insights into signup, sign in, and authentication processes.`} img={`.\\Assest\\From.png`} alt={`E-commerce Product Filter`} /></SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://tables-eight.vercel.app/`} section={`Fifth Project`} title={"Data Management Journey: Table Entries"} des={`Created 'Table Entries,' a user-friendly web app allowing input into a table
                                with feedback on empty entries. Explored database handling from a frontend
                                standpoint, learning about data storage, processing, updates, deletions, and
                                user notifications.`} img={`.\\Assest\\Valid.png`} alt={`E-commerce Product Filter`} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

