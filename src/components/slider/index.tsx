
"use client";

import React from 'react'
import Image from 'next/image';
import image1 from '@/assets/images/Photo1.jpg'
import image2 from '@/assets/images/Photo-182.jpg'
import image3 from '@/assets/images/Photo-188.jpg'
import image4 from '@/assets/images/Photo-196.jpg'

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles
import s from './index.module.scss'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';




const Slider = () => {
    return (
        <>
            <h1 className={'mb-5 mt-5'}>Slider</h1>
            <div>
                <Swiper
                    // Install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar]}

                    slidesPerView={3}
                    navigation={true}
                    pagination={{ clickable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className={s.swiperSlide}>
                        <Image src={image1} alt="Picture of the author" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className={s.swiperSlide}>
                        <Image src={image2} alt="Picture of the author" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className={s.swiperSlide}>
                        <Image src={image3} alt="Picture of the author" height={400} />
                    </SwiperSlide>
                    <SwiperSlide className={s.swiperSlide}>
                        <Image src={image4} alt="Picture of the author" height={400} />
                    </SwiperSlide>
                    {/* ... */}
                </Swiper>
            </div>
        </>
    )
}

export default Slider