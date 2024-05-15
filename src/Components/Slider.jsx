// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderInfo from "./Pages/SliderInfo";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderInfo image={"https://i.ibb.co/fV3LmzG/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector-1017-48268.jpg"}></SliderInfo>
        </SwiperSlide>
        <SwiperSlide>
          <SliderInfo  image={"https://i.ibb.co/6BTnTp8/group-happy-diverse-volunteers-53876-13553.jpg"}></SliderInfo>
        </SwiperSlide>
        <SwiperSlide>
          <SliderInfo image={"https://i.ibb.co/V91y0Wy/colleagues-studying-together-college-exam-23-2149038441.jpg"}></SliderInfo>
        </SwiperSlide>
        <SwiperSlide>
          <SliderInfo image={"https://i.ibb.co/27X0Xrb/flat-world-humanitarian-day-background-with-people-getting-help-23-2149482802.jpg"} ></SliderInfo>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
