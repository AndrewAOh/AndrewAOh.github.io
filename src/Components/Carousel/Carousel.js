import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

// Import Post Hog
import { usePostHog } from 'posthog-js/react'


const Carousel = ({ slides }) => {
  const posthog = usePostHog();
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        pagination={{ clickable: true, type: 'bullets' }}
        navigation // Enables navigation arrows
        freeMode={true} // Allows free dragging/swiping
        loop={true}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true} // Adds a grab cursor when hovering
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide, index) => {
              if (index === swiper.activeIndex) {
                  slide.style.opacity = "1";
              } else if(index === swiper.activeIndex + 1 || index === swiper.activeIndex - 1) {
                  slide.style.opacity = "0.85";
              } else{
                  slide.style.opacity = "0.7";
              }
          });
        }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide" style={{width: '300px', height: '90%', marginTop: '10px', marginBottom: '10px'}}>
            <a 
              href={slide.link? slide.link : "/"}
              onClick={(e) => {
                if (posthog) {
                  posthog.capture('project_click', {
                    project_title: slide.title,
                    project_link: slide.link
                  });
                }
              }}
            >
            <div
              className="carousel-slide"
              style={{
                backgroundImage: `url(${slide.picture})`
              }}
            >
            </div>
          </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;