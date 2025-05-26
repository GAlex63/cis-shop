import { CustomSlider } from "../../../../components/Slider/Slider";
import SliderImg1 from "../../../../assets/HomePage/Wrapper1.png";
import SliderImg2 from "../../../../assets/HomePage/Wrapper2.png";
import SliderImg3 from "../../../../assets/HomePage/Wrapper3.png";
import { SliderWrapper } from "./style";

const mainImageArray = [
  { src: SliderImg1, alt: "First Slide" },
  { src: SliderImg2, alt: "Second Slide" },
  { src: SliderImg3, alt: "ThirdSlide" },
];
export const SliderBlock = () => {
  return( 
  <SliderWrapper>
  <CustomSlider images={mainImageArray} width="100%" height="500px" />;
  </SliderWrapper>
  )
};
