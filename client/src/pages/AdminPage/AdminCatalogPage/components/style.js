import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 16px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;

export const ProductTitle = styled.h3`
  margin: 0 10px 8px 0;
  width: 15%
`;

export const ProductDetail = styled.p`
  margin: 2px 10px;
  font-size: 14px;
  color: #555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionButton = styled.button`
  background-color: ${(props) => (props.delete ? "#ff4d4d" : "#4CAF50")};
  color: white;
  padding: 8px 12px;
  margin: 4px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;