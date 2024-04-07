import React, { useEffect, useState } from 'react';
import "./Project.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card1 from './CARD COMPONENTSS/Card1';
import { Pagination } from 'swiper/modules';

export default function Project() {


  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        id='Project-secion'
      >
        <SwiperSlide>
          <Card1 url={`https://walkinternational.com/`} section={`First Project`} title={"Walk International clone"} des={`Developed 'Walk International' website from scratch using React.js, ensuring
                                pixel-perfect replication. Enhanced skills in data passing between components.
                                Employed GSAP for animations, Material-UI and PrimeReact for component
                                styling. Leveraged JSON format for resource retrieval, optimizing website
                                performance.`} img={`.\\Assest\\Walkinternaltion.png`} alt={`Walk International clone`} />
        </SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://product-filter-in-react.vercel.app/`} section={`Second Project`}  title={"E-commerce Product Filter"} des={`Reactive E-commerce: Mastering Product Filtering with React.js and External
                                APIs. Enhanced skills in frontend development, creative CSS designs, and
                                responsive layouts. Demonstrated proficiency in efficiently filtering products
                                from the API.`} img={`.\\Assest\\Filter.png`} alt={`E-commerce Product Filter`} /></SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://registration-form-using-javascript.vercel.app/`} section={`Third Project`}  title={"Form Validation - Javascript"} des={`Constructed a Registration Form using JavaScript and Tailwind CSS, gaining
                                insights into signup, sign in, and authentication processes.`} img={`.\\Assest\\From.png`} alt={`E-commerce Product Filter`} /></SwiperSlide>
        <SwiperSlide>
          <Card1 url={`https://tables-eight.vercel.app/`} section={`Fourth Project`}  title={"Data Management Journey: Table Entries"} des={`Created 'Table Entries,' a user-friendly web app allowing input into a table
                                with feedback on empty entries. Explored database handling from a frontend
                                standpoint, learning about data storage, processing, updates, deletions, and
                                user notifications.`} img={`.\\Assest\\Valid.png`} alt={`E-commerce Product Filter`} /></SwiperSlide>
      </Swiper>
    </>
  )
}

