import styled from "styled-components";

export const AdminCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto 0;
  max-width: 1200px;
  width: 100%;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  width: 100%;

  & > * {
    width: 100%;
    max-width: 500px;
  }
`;

export const AllProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// import styled from "styled-components";

// export const AdminCatalogContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 100px auto 0;
//   max-width: 1200px;
//   width: 100%;
// `;
// export const ActionGroup = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   margin-bottom: 24px;
//   align-items: center;
//   justify-content: space-between;
// `;
// export const AllProductGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 0 16px;
//   box-sizing: border-box;
//   justify-content: space-between;
// `;
// export const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
