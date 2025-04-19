import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "../../styles/pagination.css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { ServiceData } from "./constant";

const Carousal = () => {
  const lexend = {
    fontFamily: "Lexend Giga, sans-serif",
  };
  const outfit = {
    fontFamily: "Outfit, sans-serif",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Wrapper for Title and Swiper */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Title */}
        <h1
          className="text-center text-2xl md:text-4xl py-0 mb-8 font-bold text-white"
          style={lexend}
        >
          INVITED SPEAKERS AND PERFORMERS
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          breakpoints={{
            // For mobile devices (width ≤ 480px)
            320: {
              slidesPerView: 1, // 1 card visible
              spaceBetween: 10, // 10px gap
            },
            // For larger mobile devices (width ≥ 480px)
            480: {
              slidesPerView: 1.5, // 1.5 cards visible (partially showing the next card)
              spaceBetween: 15, // 15px gap
            },
            // For tablets (width ≥ 768px)
            768: {
              slidesPerView: 2, // 2 cards visible
              spaceBetween: 20, // 20px gap
            },
            // For desktops (width ≥ 1024px)
            1024: {
              slidesPerView: 3, // 3 cards visible
              spaceBetween: 30, // 30px gap
            },
            // For large desktops (width ≥ 1440px)
            1440: {
              slidesPerView: 4, // 4 cards visible
              spaceBetween: 40, // 40px gap
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
              <div className="flex flex-col gap-4 group relative shadow-lg text-[#c10000] rounded-xl px-4 py-6 h-[250px] w-[200px] sm:h-[300px] sm:w-[250px] md:h-[350px] md:w-[300px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-xl" />
                <div className="relative flex flex-col justify-end h-full">
                  <div className="flex flex-col mt-auto gap-2 text-center rounded-lg opacity-90 bg-[#ede9d0] backdrop-blur-md p-2 sm:p-4">
                    <h1
                      className="text-lg sm:text-xl md:text-2xl font-semibold"
                      style={outfit}
                    >
                      {item.title}
                    </h1>
                    <p
                      className="text-sm sm:text-base md:text-lg font-medium"
                      style={outfit}
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
    </div>
  );
};

export default Carousal;
