import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { slide_1 } from "../assets";
import { slide_2 } from "../assets";
function Slider() {
  return (
    <>
      <Swiper
        
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={slide_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
