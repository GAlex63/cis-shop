import styled from "styled-components";

export const AboutBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 0 auto;
  padding: 0 var(--spacing-padding);
  max-width: 1200px;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h3 {
    font-size: 20px;
    line-height: 1.5;
    font-weight: normal;
    letter-spacing: 1px;
  }
`;

export const AboutBlockItem = styled.div`
  flex: 1 1 50%;
  max-width: 50%;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  min-width: 0;

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
