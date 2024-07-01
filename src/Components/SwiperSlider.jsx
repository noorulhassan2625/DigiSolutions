// src/SwiperSlider.js

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Assets/StyleComponents/SwiperSlider.css';

const slides = [
  { id: 1, slideTitle: 'Slide 1', content: "Slide 1 content, this is the slide content", bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+1)' },
  { id: 2, slideTitle: 'Slide 2', content: "Slide 2 content, this is the slide content", bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+2)' },
  { id: 3, slideTitle: 'Slide 3', content: "Slide 3 content, this is the slide content", bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+3)' },
  { id: 4, slideTitle: 'Slide 4', content: "Slide 4 content, this is the slide content", bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+4)' },
  // { id: 5, slideTitle: 'Slide 5', content: "Slide 5 content, this is the slide content", bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+4)' },
  // { id: 6, slideTitle: 'Slide 6', content: "Slide 6 content, this is the slide content", bgImage: 'url(https://via.placeholder.com/800x400?text=Slide+4)' },
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
              className="slide-content slideTitle position-relative"
              onMouseEnter={() => handleMouseEnter(slide.bgImage)}
            > 
              <div className='slide-info'>
              <h4>{slide.slideTitle}
              </h4>
              <p>{slide.content}</p>
              </div>
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
