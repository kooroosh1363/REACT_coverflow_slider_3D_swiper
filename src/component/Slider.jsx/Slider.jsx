import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './Slider.css';



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

                        <div className="pagination-slide">
                            <p className="swiper-pagination">1/6</p>
                            <div className="bs-icon">
                                <BsArrowLeft className="Arrow"/>
                                <BsArrowRight className="Arrow"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contain_post"></div>
            </div>
        </div>
    );
};


