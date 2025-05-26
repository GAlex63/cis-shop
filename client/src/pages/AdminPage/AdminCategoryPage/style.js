import styled from "styled-components";

export const AllCategoryGroup = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 16px auto;

  & > * {
    width: 100%;
    max-width: 500px;
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }
`;

export const CategoryTable = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 10px;
`;

export const CategoryRow = styled.div`
  display: contents;

  & > div {
    padding: 12px 0;
    border-bottom: 1px solid black;
  }

  & button {
    margin: 0 12px;
  }
`;
