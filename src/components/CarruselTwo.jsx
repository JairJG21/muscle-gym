import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CarruselTwo.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={1.5}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{
            dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper3"
        breakpoints={{
          640: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.5
          },
        }}
      >
        <SwiperSlide>
            <div className='flex items-center justify-center slide relative'>
                <div className='relative w-[40%] h-full hidden'>
                    <img src="/img/slide1.jpg" alt="" className='w-full h-full flex-shrink-0 object-cover' />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#121212] opacity-40 rounded-s-2xl"></div>
                </div>
                <div className='px-3 w-full h-full relative bg-[url(/img/slide1.jpg)] bg-cover rounded-2xl'>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#121212] opacity-70 rounded-2xl"></div>
                    <Icon icon='mdi:format-quote-open' className='text-6xl z-20 relative text-white' />
                    <p className='text-start text-sm font-robotoMono relative z-10 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta nulla quod quas, harum aperiam ipsam officia ullam voluptates dignissimos!</p>
                    <div className='text-center absolute w-full bottom-2 right-[50%] translate-x-1/2 text-white'>
                        <p className='text-2xl font-lacquer uppercase'>Juan Manuel</p>
                        <span className='text-xs font-robotoMono'>2 años entrenando</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center slide relative'>
                <div className='relative w-[40%] h-full hidden'>
                    <img src="/img/slide1.jpg" alt="" className='w-full h-full flex-shrink-0 object-cover' />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#121212] opacity-40 rounded-s-2xl"></div>
                </div>
                <div className='px-3 w-full h-full relative bg-[url(/img/slide1.jpg)] bg-cover rounded-2xl'>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#121212] opacity-70 rounded-2xl"></div>
                    <Icon icon='mdi:format-quote-open' className='text-6xl z-20 relative text-white' />
                    <p className='text-start text-sm font-robotoMono relative z-10 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta nulla quod quas, harum aperiam ipsam officia ullam voluptates dignissimos!</p>
                    <div className='text-center absolute w-full bottom-2 right-[50%] translate-x-1/2 text-white'>
                        <p className='text-2xl font-lacquer uppercase'>Juan Manuel</p>
                        <span className='text-xs font-robotoMono'>2 años entrenando</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex items-center justify-center slide relative'>
                <div className='relative w-[40%] h-full hidden'>
                    <img src="/img/slide1.jpg" alt="" className='w-full h-full flex-shrink-0 object-cover' />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#121212] opacity-40 rounded-s-2xl"></div>
                </div>
                <div className='px-3 w-full h-full relative bg-[url(/img/slide1.jpg)] bg-cover rounded-2xl'>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#121212] opacity-70 rounded-2xl"></div>
                    <Icon icon='mdi:format-quote-open' className='text-6xl z-20 relative text-white' />
                    <p className='text-start text-sm font-robotoMono relative z-10 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex soluta nulla quod quas, harum aperiam ipsam officia ullam voluptates dignissimos!</p>
                    <div className='text-center absolute w-full bottom-2 right-[50%] translate-x-1/2 text-white'>
                        <p className='text-2xl font-lacquer uppercase'>Juan Manuel</p>
                        <span className='text-xs font-robotoMono'>2 años entrenando</span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
