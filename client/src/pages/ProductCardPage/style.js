import styled from "styled-components";

export const ProductCardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 100px auto 0;
  width: 100%;
  box-sizing: border-box;
`;

export const ProductPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MainImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 16px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const PriceAndCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e63946;
`;

export const ProductForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputQuantity = styled.input`
  width: 80px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const CharacteristicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Characteristic = styled.div`
  flex: 1 1 45%;
  font-size: 16px;
  color: #666;
`;
