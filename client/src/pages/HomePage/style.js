import styled from "styled-components";
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10%;
`;

export const TitleBlock = styled.div`
  display: flex;
  margin: 32px var(--spacing-padding) 0;
  padding: 0 var(--spacing-padding);
  border-left: 5px solid var(--color-primary-blue);
`;
export const RecomendProductBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  margin: 32px var(--spacing-padding) 0;
  padding: 0 var(--spacing-padding);
`;
