import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const images = [
    "https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233__340.jpg",
    "https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233__340.jpg",
    "https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_960_720.jpg"

  ];

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        centeredSlides ={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        keyboard={{ enabled: true }}
        lazyLoading ={true}
        navigation={true}
        loop ={true}
        className="mySwiper"
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
