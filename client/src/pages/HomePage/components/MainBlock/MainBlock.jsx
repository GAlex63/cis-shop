import { Link } from "react-router-dom";
import MainImg1 from "../../../../assets/HomePage/Wrapper11.jpg";
import { Button } from "../../../../components";
import { MainBlockContainer, MainBlockContent, TextBackground } from "./style";

export const MainBlock = () => {

  return (
    <MainBlockContainer background={MainImg1}>
      <MainBlockContent>
        <TextBackground>

        <h1>Центр инженерной сантехники</h1>
        <p>Надежность. Качество. Работаем с 2000 года.</p>
          <Link to="/products">
           <Button height="50px" fontSize="24px">Перейти в каталог</Button>
          </Link>
        </TextBackground>
        </MainBlockContent>
    </MainBlockContainer>
  );
};
