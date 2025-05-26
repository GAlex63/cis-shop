import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 80%;
  justify-content: space-between;
  margin: 100px 10%;
  padding: 20px;
`;

export const CartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CartItemsContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  max-width: 80%;
`;
export const ClearButton = styled.button`
  border: none;
  background-color: #fff;
  color: gray;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorDiv = styled.div`
  font-size: 18px;
  color: #999;
`;

export const CartSummary = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 25%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  position: sticky;
  top: 20%;
  height: fit-content;
  z-index: 1;
`;

export const OldTotalPrice = styled.div`
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
`;

export const TotalPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  margin-top: 10px;
  background-color: #ff5722;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e64a19;
  }
`;

export const CheckoutNote = styled.p`
  font-size: 12px;
  color: #777;
  margin-top: 10px;
`;
