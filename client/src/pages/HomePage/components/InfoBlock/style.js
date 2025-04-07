import styled from "styled-components";

export const InfoBlocksContainer = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 var(--spacing-padding);

`;

export const Info = styled.div`
  flex: 1;
  text-align: center;
  height: 150px;
  padding: 0 20px;
  animation: forwards;
  border-radius: 10px;
  background-color: #f2f0f0;
  margin: 50px 0;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #666;
    margin: 5px 0 0 0;
  }
`;