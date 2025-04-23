import { useNavigate } from "react-router-dom";
import { CartButton } from "..";

import {
  ActionBlock,
  Card,
  CardItem,
  Image,
  Price,
  ProductCardContainer,
  TitleGroup,
} from "./style";

export const ProductCard = ({ product, imgUrl }) => {
  const image = product.imgUrl || imgUrl;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <ProductCardContainer>
      <Card>
        <CardItem onClick={handleCardClick}>
          <Image src={image} alt={product.title} />
          <TitleGroup>
            <h3>{product.title}</h3>
          </TitleGroup>
        </CardItem>

        <ActionBlock>
          <Price>{product.price} ₽</Price>
          <CartButton product={product} />
        </ActionBlock>
      </Card>
    </ProductCardContainer>
  );
};
