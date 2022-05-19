import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import './CarouselSec.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.2
  },
  tablet: {
    breakpoint: { max: 1024, min: 991 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 991, min: 0 },
    items: 3.2
  }
};
const CarouselSec = () => {
  return (
    <div className="Carousel">
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        autoPlay={false}
        shouldResetAutoplay={false}
      >
        <div className='unselectable'>TAGLINE</div>
        <div className='unselectable'>TAGLINE</div>
        <div className='unselectable'>TAGLINE</div>
        <div className='unselectable'>TAGLINE</div>
        <div className='unselectable'>TAGLINE</div>
        <div className='unselectable'>TAGLINE</div>
      </Carousel>
    </div>
  );
}

export default CarouselSec;