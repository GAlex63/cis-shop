import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.div`
  img {
    width: 100px;
    height: auto;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const ItemTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const PriceSection = styled.div`
  display: flex;
  width: 20%;
   align-items: flex-end;
`;
export const TotalPrice = styled.div`
  display: flex;
  width: 20%;
  align-items: flex-end;
`;

export const CurrentPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const QuantitySection = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;