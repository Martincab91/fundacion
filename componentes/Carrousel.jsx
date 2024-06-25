// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export const Carrousel = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-0 m-0 max-h-[900px]"
      >
        <SwiperSlide>
          <div className="lg:w-full lg:h-full lg:bg-black lg:absolute lg:opacity-50"></div>
          <Image
            alt="Imagen de portada"
            src={"/car-3.jpeg"}
            width={"1920"}
            height={"900"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-full lg:h-full lg:bg-black absolute lg:opacity-50"></div>
          <Image
            alt="Imagen de portada"
            src={"/car-4.jpeg"}
            width={"1920"}
            height={"900"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-full lg:h-full lg:bg-black lg:absolute lg:opacity-50"></div>
          <Image
            alt="Imagen de portada"
            src={"/car-1.jpeg"}
            width={"1920"}
            height={"900"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-full lg:h-full lg:bg-black lg:absolute lg:opacity-50"></div>
          <Image
            alt="Imagen de portada"
            src={"/car-2.jpeg"}
            width={"1920"}
            height={"900"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrousel;
