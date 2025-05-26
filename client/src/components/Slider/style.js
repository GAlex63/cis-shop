import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;

  .slick-slider {
    width: 100%;
  }

  .slick-slide {
    text-align: center;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    color: white;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: ${({ height }) => height || "300px"};
  object-fit: contain;
  display: block;
  max-width: 100%;
`;
