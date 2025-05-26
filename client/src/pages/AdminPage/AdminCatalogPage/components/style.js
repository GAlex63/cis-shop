import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  gap: 16px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: var(--color-primary-blue);
  cursor: pointer;
  text-decoration: underline;
  width: fit-content;
`;

export const ProductDetail = styled.p`
  margin: 0;
  font-size: 14px;
  color: #444;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
