import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Title from './Title';
import Button from './Button';
import { Pagination } from "swiper/modules"

const Carousel = ({ images, title, text }) => {
  return (
    <>
    <div className='py-20' style = {{ backgroundColor: '#004e38' }}>
      <div className='flex justify-center text-white mb-20'>
        <Title title={"lorem ipsum dolor sit amet"}/>
      </div> 
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '#rct-swiper-pagination',
          type: 'bullets',
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
        slidesOffsetBefore={100}
        slidesOffsetAfter={100}
        spaceBetween={10}
        slidesPerView={3.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img 
                src={image} 
                width={400} 
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-center my-5'>
        <div id = "rct-swiper-pagination"></div>
      </div>
      <div className='flex justify-center mt-5 text-white'>
        <Button>View all</Button>
      </div>
      
    </div>
    
    </>
    
  )
}

export default Carousel;