import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import '../components/CarouselSec.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5.2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
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
  <div>TAGLINE</div>
  <div>TAGLINE</div>
  <div>TAGLINE</div>
  <div>TAGLINE</div>
  <div>TAGLINE</div>
  <div>TAGLINE</div>
</Carousel>
</div>
     );
}
 
export default CarouselSec;