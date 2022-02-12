import { useRef, useState } from "react";
import AmenitiesCard from "../../utils/card/amenitiesCard";
import Title from "../../utils/title";
import { DUMMY_DATA } from "../../../data/amenities";
import classes from "./amenities.module.css";
import AmenitiesSlider from "../../slider/amenities";

export default function Amenities(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef();

  function amenitiesClickHandler(e, ame) {
    swiperRef.current.swiper.slideTo(+ame.id - 1, 500, false);
    setActiveIndex(ame.id);
  }
  return (
    <section className="py-14">
      <div className="container">
        <div className="lg:hidden">
          {/* Title */}
          <Title className="subTitle">
            Discover Lifestyle <br /> <span>Amenities</span>
          </Title>
          {/* Description */}
          <p className="mainColor md:w-3/4 mb-6 md:mb-12">
            Occupying a land area of 33,000 square meters, Makadi Heights’
            stunning clubhouse
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full order-2 lg:order-1 lg:w-1/2 px-4">
            <div className="hidden lg:block">
              {/* Title */}
              <Title className="subTitle">
                Discover Lifestyle <br /> <span>Amenities</span>
              </Title>
              {/* Description */}
              <p className="mainColor md:w-3/4 mb-12">
                Occupying a land area of 33,000 square meters, Makadi Heights’
                stunning clubhouse
              </p>
            </div>

            {/* Amenities Card */}
            <div className={`flex flex-wrap justify-center ${classes.row}`}>
              {DUMMY_DATA?.map((ame) => {
                return (
                  <div
                    key={ame.id}
                    id={ame.id}
                    className={`sm:w-1/2 px-3 ${classes.row_col} `}
                    onClick={(event) => amenitiesClickHandler(event, ame)}
                  >
                    <AmenitiesCard
                      cardClassName={+activeIndex === ame.id && "cardActive"}
                      imgHeader={ame.logo}
                      title={ame.title}
                      desc={ame.desc}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full order-1 lg:order-2 lg:w-1/2  px-4">
            {/* Slider */}
            <AmenitiesSlider swiperRef={swiperRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
