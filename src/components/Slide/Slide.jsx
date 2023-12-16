/*import React from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplay autoplaySpeed={900} pauseOnHover={false}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;*/


/*import React from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} autoplay autoplaySpeed={1500} pauseOnHover={false}>
          {React.Children.map(children, (child) => (
            <div className="item">
              {child}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;*/

import React, { useState } from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);

  const isEnlarged = (index) => {
    const middleIndex = Math.floor(slidesToShow / 2);
    const startIndex = currentSlide - middleIndex;
    const endIndex = currentSlide + middleIndex;

    if (previousSlide !== null && previousSlide !== currentSlide) {
      const prevStartIndex = previousSlide - middleIndex;
      const prevEndIndex = previousSlide + middleIndex;

      if (index >= prevStartIndex && index <= prevEndIndex) {
        return false;
      }
    }

    return index >= startIndex && index <= endIndex;
  };

  const handleSlideChange = (index) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          autoplay={true}
          infinite
          speed={700}
          autoplaySpeed={1500}
          afterChange={handleSlideChange}
          className="carousel-container"
        >
          {React.Children.map(children, (child, index) => (
            <div className={`carousel-slide ${isEnlarged(index) ? 'enlarged-slide' : ''}`}>
              {child}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

