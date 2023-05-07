// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { checkImageURL } from "../../../../shared/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/swiperslider.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import { images } from "../../../../shared/constants";

export const SwiperRoot = (feedData, renderItem) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {feedData.map((item) => renderItem(item))}
    </Swiper>
  );
};

export const SwiperContent = (item) => {
  return (
    <SwiperSlide key={item.title}>
      <div className="custom-swiper swiper-card">
        <a
          href={item.links[0].url}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none card"
        >
          {checkImageURL(
            item.enclosures && item.enclosures[0] && item.enclosures[0].url
          ) ? (
            <img
              src={item.enclosures[0].url}
              alt={item.title}
              className="card"
            />
          ) : (
            <img
              src={images.placeholderFastNewsImage}
              alt="placeholder"
              className="card"
            />
          )}
          <div className="swiper-title text-truncate">
            <h3 className="text-truncate">{item.title}</h3>
          </div>
        </a>
        <div className="mb-5"></div>
      </div>
    </SwiperSlide>
  );
};
