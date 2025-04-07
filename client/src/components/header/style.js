import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 19px;
  height: 100px;
  padding: 0 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  color: black;
  box-sizing: border-box;
  background-color: var(--main-bg-color);
  z-index: 10;
  border-bottom: 2px solid var(--color-primary-blue);
`;
export const CenterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color);
`;
export const LogoBlock = styled.div`
  /* width: 10%; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const LogoImg = styled.img`
  width: auto;
  height: 70px;
`;

export const LinksBlock = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 50%;
`;

export const IconsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  /* flex: 0 0 5%; */
  width: 30%;
`;
