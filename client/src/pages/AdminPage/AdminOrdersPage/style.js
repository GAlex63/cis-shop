import styled from "styled-components";

export const AdminOrdersPageContainer = styled.div`
display: flex;
flex-direction: column;
margin: 100px auto 0;
justify-content: space-between;
`
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const TableRow = styled.div`
  display: flex;

  & > div {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }
`;

export const HeaderRow = styled(TableRow)`
  font-weight: bold;
  background-color: #f5f5f5;

  & > div {
    border-color: #bbb;
  }
`;

export const OrderPageTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
`;