import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 95%;
  max-width: ${(props) => props.width || "1800px"};
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 5px;

  .slick-slide {
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .slick-prev,
  .slick-next {
    width: 100px;
    height: 100px;
    z-index: 1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

   
  }

  .slick-prev {
    left: 0px;
  }

  .slick-next {
    right: 0px; 
  }
`;

export const Slide = styled.div`
  position: relative;

  h2 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    font-size: 3em;
    font-weight: bold;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 20px;
    color: #fff;
    font-size: 1.5em;
  }
`;