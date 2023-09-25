import React , {useRef, useState} from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




import './Slider.css';
import { ContentSlider } from "../ContentSlider.jsx/ContentSlider";


import img_1 from '../images/36W-black.jpg';
import img_2 from '../images/36W-green.jpg';
import img_3 from '../images/36W-red.jpg';
import img_4 from '../images/36W-white.jpg';
import img_5 from '../images/46V-sand.jpg';
import img_6 from '../images/48V-grey-white.jpg';




const Products = [
    {
        id: 1,
        productName: "hat 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        image: img_1
    },
    {
        id: 2,
        productName: "hat 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        image: img_2
    },
    {
        id: 3,
        productName: "hat 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        image: img_3
    },
    {
        id: 4,
        productName: "hat 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. !",
        image: img_4
    },
    {
        id: 5,
        productName: "hat 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        image: img_5
    },
    {
        id: 6,
        productName: "hat 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        image: img_6
    }
]

export const Slider = () => {

    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst:true,
        isLast:false,
    });

    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    }

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    }

    const onSlideChange =swiper =>{
        handleSlideByState({
            isFirst : swiper.isBeginning,
            isLast : swiper.isEnd,
        })
    }


    const {isLast, isFirst} = slideBegOrNot;

    return (
        <div className="container">
            <h1 className="heading">post carousel using react swiper js</h1>

            <div className="box_post">
                <div className="bg_left"></div>
                <div className="bg_right"></div>


                <div className="heading_post">
                    <div className="box_heading">
                        <h2 className="heading_second">only for you </h2>

                        <div className="pagination_slide">
                            <p className="swiper_paginations"></p>
                            <div className="icon_bs">
                                <BsArrowLeft className={`Arrow ${isFirst ? 'disabled' : ''}`} onClick={handlePrev} />
                                <BsArrowRight className={`Arrow ${isLast ? 'disabled' : ''}`}  onClick={handleNext}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contain_post">
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    className={"mySwiper"}
                    ref={SlideRef}
                    onSlideChange={onSlideChange}
                    pagination={{
                        el: '.swiper_paginations',
                        type:'fraction',
                    }}
                    navigation={false}
                    modules={[Navigation, Pagination]}
                    >
                        {
                            Products.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <ContentSlider
                                        key={item.id}
                                        image={item.image}
                                        title={item.productName}
                                        description={item.description} 
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};


