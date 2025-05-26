import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  padding: 0 var(--spacing-padding);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
