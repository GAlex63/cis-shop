
import {
  CartItemContainer,
  CurrentPrice,
  ItemDetails,
  ItemImage,
  ItemTitle,
  PriceSection,
  QuantityButton,
  QuantitySection,
  QuantityValue,
  TotalPrice
} from "./style";

export const CartItem = ({
  product,
  count,
  onUpdateQuantity,
  onRemoveProduct,
}) => {

  const { id, img_url, title, price } = product;

  const itemTotal = count * price;

  return (
    <CartItemContainer>
      <ItemImage>
        {img_url ? (<img src={img_url} alt={title} />) : (<div> Картинки нет</div>)}
        
      </ItemImage>
      <ItemDetails>
        <ItemTitle>{title}</ItemTitle>
      </ItemDetails>
      <PriceSection>
        <CurrentPrice>{price} ₽</CurrentPrice>
      </PriceSection>
      <QuantitySection>
        <QuantityButton
          onClick={() => onUpdateQuantity(id, count - 1)}
          disabled={count <= 1}
        >
          -
        </QuantityButton>
        <QuantityValue>{count}</QuantityValue>
        <QuantityButton onClick={() => onUpdateQuantity(id, count + 1)}>
          +
        </QuantityButton>
        <button onClick={() => onRemoveProduct(id)}>Удалить</button>
        <PriceSection>
        <TotalPrice>Итог: {itemTotal} ₽</TotalPrice>
        </PriceSection>
      </QuantitySection>
    </CartItemContainer>
  );
};
