import { Link } from "react-router-dom";
import MainImg1 from "../../../../assets/HomePage/Wrapper11.jpg";
import { Button } from "../../../../components";
import { ButtonContainer, Image, MainBlockContainer } from "./style";

export const MainBlock = () => {

  return (
    <MainBlockContainer>
      <Image src={MainImg1} alt="Main Image" />
      <ButtonContainer>
        <Link to="/products">
        <Button height="50px" fontSize="30px"> Перейти в каталог</Button>
        </Link>
        
      </ButtonContainer>
    </MainBlockContainer>
  );
};
