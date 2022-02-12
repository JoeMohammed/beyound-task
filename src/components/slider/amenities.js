import { DUMMY_DATA } from "../../data/amenities";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

export default function AmenitiesSlider(props) {
  return (
    <div className="lg:pt-16 w-full">
      <Swiper
        slideToClickedSlide={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={0}
        ref={props.swiperRef}
        className="mySwiper pb-10"
      >
        {DUMMY_DATA?.map((ame) => {
          return (
            <SwiperSlide key={ame.id}>
              <div className="w-full text-center">
                <img src={ame.img} alt={ame.title} className="mx-auto" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
