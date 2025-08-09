import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import images
import image1 from "../../../../assets/slider/1.jpg";
import image2 from "../../../../assets/slider/2.jpg";
import image3 from "../../../../assets/slider/3.jpg";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" className="w-full h-[500px] object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
