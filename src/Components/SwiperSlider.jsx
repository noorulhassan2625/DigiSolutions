// src/SwiperSlider.js

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Assets/StyleComponents/SwiperSlider.css';

const slides = [
  { id: 1, content: 'Slide 1', bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+1)' },
  { id: 2, content: 'Slide 2', bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+2)' },
  { id: 3, content: 'Slide 3', bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+3)' },
  { id: 4, content: 'Slide 4', bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+4)' },
];

const SwiperSlider = () => {
  const [bgImage, setBgImage] = useState(slides[0].bgImage);

  const handleMouseEnter = (image) => {
    setBgImage(image);
  };

  return (
    <div className="swiper-container" style={{ backgroundImage: bgImage }}>
      <Swiper
        spaceBetween={2}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide-content"
              onMouseEnter={() => handleMouseEnter(slide.bgImage)}
            >
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
