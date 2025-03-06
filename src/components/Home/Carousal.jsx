import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "./Pagination.css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { ServiceData } from "./Speakers.js";

const Carousal = () => {
  const lexend = {
    fontFamily: "Lexend Giga, sans-serif",
  };
  const Outfit = {
    fontFamily: "Outfit, sans-serif",
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col h-auto bg-black py-8">
        <h1
          className="text-center text-2xl md:text-4xl py-4 mb-8 font-bold text-white"
          style={lexend}
        >
          INVITED SPEAKERS AND PERFORMERS
        </h1>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[FreeMode, Pagination, Autoplay]}
          className="max-w-[95%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-4 mb-10 group relative shadow-lg text-[#c10000] rounded-xl px-4 py-6 h-[300px] w-[250px] sm:h-[350px] sm:w-[300px] md:h-[400px] md:w-[350px] lg:h-[450px] lg:w-[400px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-slate-300 opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col justify-end h-full">
                  <div className="flex flex-col mt-auto gap-2 text-center rounded-lg opacity-90 bg-[#ede9d0] backdrop-blur-md p-2 sm:p-4">
                    <h1
                      className="text-lg sm:text-xl md:text-2xl font-semibold"
                      style={Outfit}
                    >
                      {item.title}
                    </h1>
                    <p
                      className="text-sm sm:text-base md:text-lg font-medium"
                      style={Outfit}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousal;