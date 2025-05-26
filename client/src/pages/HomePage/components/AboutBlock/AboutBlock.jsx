import { CustomSlider } from "../../../../components/Slider/Slider";
import AboutImg1 from "../../../../assets/Fondital.jpg";
import AboutImg2 from "../../../../assets/STOUT1.jpg";
import { AboutBlockContainer, AboutBlockItem } from "./style";


const aboutImageArray = [
  { src: AboutImg1, alt: "First Slide" },
  { src: AboutImg2, alt: "Second Slide" },
];

export const AboutBlock = () => {
  return (
    <AboutBlockContainer>
      <AboutBlockItem>
        <h3>
          Центр инженерной сантехники занимается розничной продажей материалов, оборудования и инструментов для монтажа систем отопления, водоснабжения, канализации.
          Наши приоритеты - безупречное качество продукции, только проверенные и надежные поставщики, профессиональный подбор необходимого клиенту оборудования.
        </h3>
      </AboutBlockItem>
      <AboutBlockItem>
        <CustomSlider images={aboutImageArray} width="100%" height="300px" />
      </AboutBlockItem>
    </AboutBlockContainer>
  );
};
