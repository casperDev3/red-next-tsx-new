
"use client";

import React from 'react'
import Image from 'next/image';
import image1 from '@/assets/images/Photo1.jpg'
import image2 from '@/assets/images/Photo-182.jpg'
import image3 from '@/assets/images/Photo-188.jpg'
import image4 from '@/assets/images/Photo-196.jpg'

import s from './index.module.scss'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <>
            <h1 className={'mb-5 mt-5'}>Slider</h1>
            <div>
                <Swiper
                    // Install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}    
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <Image src={image1} alt="Picture of the author" height={500} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image2} alt="Picture of the author" height={500} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image3} alt="Picture of the author" height={500} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image4} alt="Picture of the author" height={500} />
                    </SwiperSlide>
                    {/* ... */}
                </Swiper>
            </div>
        </>
    )
}

export default Slider