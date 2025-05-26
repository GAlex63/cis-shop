import { Info, InfoBlocksContainer } from "./style";

export const InfoBlock = () => {
  return (
    <InfoBlocksContainer>
      <Info>
        <h3>Оригинальные товары</h3>
        <br />
        <p>Являемся сертифицированными дилерами</p>
      </Info>
      <Info>
        <h3>Поможем с подбором необходимого оборудования</h3>
        <p>Все консультанты имеют опыт проектирования и монтажа</p>
      </Info>
      <Info>
        <h3>При необходимости доставим на объект</h3>
      </Info>

    </InfoBlocksContainer>
  );
};
