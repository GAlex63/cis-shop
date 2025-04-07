import styled from "styled-components";

export const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  margin: 0 2px;
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;  
box-sizing: border-box;     
align-items: center;   

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 250px;
  height: 300px;
  margin: 10px;
  text-align: center;


  :hover {
    cursor: pointer;
  }
`;

export const CardItem = styled.div`
display:flex;
flex-direction: column;
align-items: center;
border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;
  width: 200px;
  height: 80%;
  margin: 1px;
  text-align: center;



`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  /* margin-bottom: 5px; */
`;

export const Price = styled.p`
  font-size: 18px;
  color: var(--item-color);
`;
export const ProductCardContainer = styled.div`
  display: flex;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 20px;
  margin: 10px 0 ;
  & h3 {
    margin: 0 2px;
    font-weight: 500;
  }
`;
