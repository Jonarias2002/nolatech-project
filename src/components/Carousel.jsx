import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Title from './Title';
import Button from './Button';

const Carousel = ({ images, title, text }) => {
  return (
    <>
    <div className='bg-green-400'>
      <div className='flex justify-center text-white my-10'>
        <Title title={"lorem ipsum dolor sit amet"}/>
      </div> 
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img 
                className='pl-4'
                src={image} 
                width={400} 
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-center mt-5 text-white'>
        <Button>View all</Button>
      </div>
      
    </div>
    
    </>
    
  )
}

export default Carousel;