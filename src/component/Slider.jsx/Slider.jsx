import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './Slider.css';
import { ContentSlider } from "../ContentSlider.jsx/ContentSlider";



export const Slider = () => {
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
                            <p className="swiper_pagination">1/6</p>
                            <div className="icon_bs">
                                <BsArrowLeft className="Arrow"/>
                                <BsArrowRight className="Arrow"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contain_post">
                    <ContentSlider/>
                </div>
            </div>
        </div>
    );
};


