import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import styles from "./swiper.module.css";

const images = [
  "https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
];

export default function swiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        lazyLoading={true}
        loop={true}
      >
        {images.map((val, id) => {
          return (
            <SwiperSlide>
              <img className="w-full h-[100vh] object-cover object-center aspect-video" src={images[id]} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
