import styled from "styled-components";

export const InfoBlocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding: 0 var(--spacing-padding);
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`;

export const Info = styled.div`
  flex: 1 1 30%;
  min-width: 280px;
  text-align: left;
  height: auto;
  padding: 24px;
  border-radius: 10px;
  background-color: #f2f0f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: var(--color-primary-blue);
  }

  p {
    font-size: 1em;
    color: #555;
    margin: 5px 0 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
