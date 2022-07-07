import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselSec.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 991 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 991, min: 0 },
    items: 2.5,
  },
};
const CarouselSec = () => {
  return (
    <div className="Carousel" id="ab">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        autoPlay={false}
        shouldResetAutoplay={false}
        infinite={true}
      >
        <div className="unselectable">consultation</div>
        <div className="unselectable">incubation</div>
        <div className="unselectable">advice</div>
        <div className="unselectable">project</div>
        <div className="unselectable">management</div>
        <div className="unselectable">marketing</div>
        <div className="unselectable">smart</div>
        <div className="unselectable">contract</div>
        <div className="unselectable">development</div>
        <div className="unselectable">tokenomics</div>
        <div className="unselectable">audit</div>
      </Carousel>
    </div>
  );
};

export default CarouselSec;
