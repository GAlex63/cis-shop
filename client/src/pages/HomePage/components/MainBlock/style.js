import styled from "styled-components";

export const MainBlockContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  max-width: 90%;
  z-index: 2;
`;

export const TextBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4); /* Полупрозрачный тёмный фон */
  padding: 32px 32px;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
  }

  p {
    font-size: 20px;
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
    }
  }
`;
