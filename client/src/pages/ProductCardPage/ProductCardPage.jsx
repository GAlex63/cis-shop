import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useParams } from "react-router-dom";
import { addProductToCart, loadProductAsync } from "../../action";
import { selectProduct, selectUserId } from "../../selectors";

import { ProductCartForm } from "./component/product-form/product-form";
import {
  GalleryContainer,
  MainImage,
  ProductInfoContainer,
  ProductPageMainContainer,
  ProductTitle,
  ProductDescription,
  PriceAndCartContainer,
  ProductPrice,
  ProductCardPageContainer,
  ProductForm,
  InputQuantity,
  ImageContainer,
} from "./style";
import { Button } from "../../components";

export const ProductCardPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const userId = useSelector(selectUserId);
  const isEditing = useMatch("/products/:id/edit");

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      const productData = await dispatch(loadProductAsync(id));
      if (productData.error) {
        setError(productData.error);
      }
      setIsLoading(false);
    };

    loadProduct();
  }, [dispatch, id, userId]);

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    let newQuantity = value;
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setCount(newQuantity);
    } else {
      setCount(0);
    }
    return newQuantity;
  };

  const handleAddToCart = () => {
    const productId = product.id;
    dispatch(addProductToCart(productId, count, userId));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <ProductCardPageContainer>
      {isEditing ? (
        <ProductCartForm key={product.id} product={product} />
      ) : (
        <>
          <ProductPageMainContainer>
            <GalleryContainer>
              <ImageContainer>
                <MainImage src={product.imgUrl} alt={product.title} />
              </ImageContainer>
            </GalleryContainer>
            <ProductInfoContainer>
              <ProductTitle>
                {product.title}
              </ProductTitle>

              <PriceAndCartContainer>
                <div>
                  <ProductPrice>{product.price} ₽</ProductPrice>
                </div>
                <ProductForm>
                  <label htmlFor="quantity">Количество :</label>
                  <InputQuantity
                    type="number"
                    id="quantity"
                    value={count}
                    onChange={handleQuantityChange}
                    min="1"
                  />
                </ProductForm>
              </PriceAndCartContainer>
              <div>
                <Button
                  width="150px"
                  onClick={() => handleAddToCart(product, userId)}
                >
                  В корзину
                </Button>
              </div>
              <ProductDescription>{product.desc}</ProductDescription>
            </ProductInfoContainer>
          </ProductPageMainContainer>
        </>
      )}
    </ProductCardPageContainer>
  );
};
