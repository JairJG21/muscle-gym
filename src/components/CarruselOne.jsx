
// export default CarruselOne;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './CarruselOne.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        centeredSlides={true}
        className="mySwiper2 h-96 mb-3 rounded-2xl"
      >
        <SwiperSlide>
          <img src="/img/slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
        }}
        className="mySwiper h-40"
      >
        <SwiperSlide>
          <img src="/img/slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
