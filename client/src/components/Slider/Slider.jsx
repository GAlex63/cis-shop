import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide, SliderContainer } from "./style";

export const CustomSlider = ({ images, width, height }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <SliderContainer width={width}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index}>
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              style={{ height }}
            />
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

CustomSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, 
      alt: PropTypes.string, 
    })
  ).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
};