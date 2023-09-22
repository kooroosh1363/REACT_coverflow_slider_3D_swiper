import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// // import './App.css';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SwiperEffectCoverflow, SwiperPagination, SwiperNavigation } from 'swiper';


import slide_image_1 from "./assets/images/36W-black.jpg";
import slide_image_2 from "./assets/images/36W-green.jpg";
import slide_image_3 from "./assets/images/36W-red.jpg";
import slide_image_4 from "./assets/images/36W-white.jpg";
import slide_image_5 from "./assets/images/46V-sand.jpg";
import slide_image_6 from "./assets/images/48V-grey-white.jpg";
function App() {


  return (
    <div className="container">
      <h1 className="heading">hat store</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }
        }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable:true,
        }}
        modules={[swiperEffectCoverflow, SwiperPagination, SwiperNavigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="image_slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_2} alt="image_slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_3} alt="image_slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_4} alt="image_slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_5} alt="image_slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_6} alt="image_slide" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>

          <div className="swiper-button-next slider-arrow">

            <ion-icon name="arrow-forward-circle-outline"></ion-icon>

          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>


    </div>
  );
}

export default App;
