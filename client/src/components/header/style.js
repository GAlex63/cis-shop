import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: var(--main-bg-color);
  border-bottom: 2px solid var(--color-primary-blue);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding: 16px;
  }
`;

export const LogoBlock = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 60px;
`;

export const LinksBlock = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex: 1; /* Позволяет центровать */

  a {
    text-decoration: none;
    font-size: 16px;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent);
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
    gap: 16px;
  }
`;

export const ServiceBlock = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 8px;
    justify-content: center;
    width: 100%;
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const IconsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;
