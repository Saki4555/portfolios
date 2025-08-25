import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../../assets/projects/image1.jpg";
import image2 from "../../assets/projects/image2.jpg";
import image3 from "../../assets/projects/image3.jpg";
import image4 from "../../assets/projects/image4.jpg";
import image5 from "../../assets/projects/image5.jpg";
import image6 from "../../assets/projects/image6.jpg";
import image7 from "../../assets/projects/image7.jpg";
import image8 from "../../assets/projects/image8.jpg";
import image9 from "../../assets/projects/image9.jpg";
import image10 from "../../assets/projects/image10.jpg";
import image11 from "../../assets/projects/image11.jpg";
import image12 from "../../assets/projects/image12.jpg";
import image13 from "../../assets/projects/image13.jpg";
import image14 from "../../assets/projects/image14.jpg";
import image15 from "../../assets/projects/image15.jpg";


import './ProjectSlider.css'

const ProjectSlider = () => {
  return (
    <Swiper
      cssMode={true}
      pagination={{
        type: "fraction",
      }}
      // pagination={true}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination, Navigation]}
      // navigation={{
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // }}
      // onInit={(swiper) => {
      //   swiper.navigation.nextEl.style.color = "blue";
      //   swiper.navigation.prevEl.style.color = "blue";
      // }}
      className="mySwiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={image1} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image6} className="rounded-3xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image7} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image8} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image9} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image10} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image11} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image12} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={image13} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={image14} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image15} height={150} className="rounded-xl" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectSlider;
