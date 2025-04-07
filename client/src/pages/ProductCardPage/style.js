import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;  
`;

export const FavoriteButtonContainer = styled.div`
  position: absolute;
  top: -px;           
  right: -20px;         
  z-index: 1;        
`;
export const ProductCardPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 100px auto 0;
`;
export const ProductPageMainContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin: 0 auto;
`

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  margin-right: 20px;
`;

export const ThumbnailImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '2px solid #333' : '1px solid #ddd')};

  &:hover {
    border-color: #555;
  }
`;


export const ProductInfoContainer = styled.div`
  width: 80%;
  margin-top: 20px;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;


export const PriceAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e63946;
`;

export const OldPrice = styled.span`
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;


export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-top: 20px;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ isActive }) => (isActive ? '#333' : '#f8f8f8')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const TabContent = styled.div`
width: 100%;
  padding: 20px;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
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

export const ReviewsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const Review = styled.div`

  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const ReviewAuthor = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const ReviewText = styled.div`
  font-size: 16px;
  color: #666;
`;

export const ProductForm = styled.form`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const InputQuantity = styled.input`
  width: 80px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;