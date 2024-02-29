import React from "react";
import Month from "./Month";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MonthsSlide({ months }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 400 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 399, min:0},
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    // <div className="col-lg-12">
    <Carousel
      draggable={true}
      swipeable={true}
      responsive={responsive}
      infinite={false}
      autoPlaySpeed={700}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
    >
      {months.map((month,index) => {
          return(
          <div className="slider" key={index}>
            <div className="col-lg-10">
            <Month
              imageId={month.id}
              monthLabel={month.MonthMm}
              monthFestival={month.FestivalMm}
            />
            </div>
            
          </div>
        )})}
    </Carousel>
    // </div>
  );
}
