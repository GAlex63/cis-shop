import { Info, InfoBlocksContainer } from "./style";

export const InfoBlocks = () => {
  return (
    <InfoBlocksContainer>
      <Info>
        <h3>Соответствие ГОСТ</h3>
        <br />
        <p>Наличие сертификатов соответствия и протоколы испытаний</p>
      </Info>
      <Info>
        <h3>Выбор цветов и форм</h3>
        <p>15 форм, 3 фактуры и более 40 вариантов цветов</p>
      </Info>
      <Info>
        <h3>Отсутствие рисков</h3>
        <br />
        <p>Честная смета и работа по договору</p>
      </Info>
      <Info>
        <h3>Работа под ключ</h3>
        <br />
        <p>Комплексное благоустройство территории</p>
      </Info>
    </InfoBlocksContainer>
  );
};
