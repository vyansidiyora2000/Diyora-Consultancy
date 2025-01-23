import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/loan1.jpg";
import img2 from "../assets/loan2.jpg";
import img3 from "../assets/loan3.jpg";
import img4 from "../assets/loan4.jpg";
import img5 from "../assets/loan5.jpg";
import img6 from "../assets/loan6.jpg";

export default function SwiperComponent() {
  return (
    <div className="w-full h-96">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true} 
        modules={[Autoplay, Pagination, Navigation]} 
        className="w-full h-full text-black"
      >
        <SwiperSlide className="flex items-center justify-center">
          <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={img3} alt="Slide 3" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={img4} alt="Slide 4" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={img5} alt="Slide 5" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img src={img6} alt="Slide 6" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
