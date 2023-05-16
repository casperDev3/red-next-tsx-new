
"use client";

import React from 'react'
import s from './index.module.scss'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <>
            <div className={s.sliderContainer}>
                <Swiper
                    // Install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}    
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={s.swiperContainer}
                >
                    <SwiperSlide className={s.swiperSlide}>Slide 1</SwiperSlide>
                    <SwiperSlide className={s.swiperSlide}>Slide 2</SwiperSlide>
                    <SwiperSlide className={s.swiperSlide}>Slide 3</SwiperSlide>
                    <SwiperSlide className={s.swiperSlide}>Slide 4</SwiperSlide>
                    {/* ... */}
                </Swiper>
            </div>
        </>
    )
}

export default Slider