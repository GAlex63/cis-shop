import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useParams } from "react-router-dom";

import { addProductToCart, loadProductAsync } from "../../action";
import { selectProduct, selectUserId } from "../../selectors";

import { ProductCartForm } from "./component/product-form/product-form";
import { Button } from "../../components";
import {
  ProductCardPageContainer,
  ProductPageMainContainer,
  GalleryContainer,
  ImageContainer,
  MainImage,
  ProductInfoContainer,
  ProductTitle,
  ProductDescription,
  PriceAndCartContainer,
  ProductPrice,
  ProductForm,
  InputQuantity,
  ButtonWrapper,
} from "./style";

export const ProductCardPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const userId = useSelector(selectUserId);
  const isEditing = useMatch("/products/:id/edit");

  const [count, setCount] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const result = await dispatch(loadProductAsync(id));
        if (result?.error) {
          setError(result.error);
        }
      } catch (err) {
        setError("Ошибка загрузки товара");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [dispatch, id]);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setCount(isNaN(value) ? 1 : value);
  };

  const handleAddToCart = () => {
    if (product?.id && userId) {
      dispatch(addProductToCart(product.id, count, userId));
    }
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (isEditing) {
    return (
      <ProductCardPageContainer>
        <ProductCartForm key={product.id} product={product} />
      </ProductCardPageContainer>
    );
  }

  return (
    <ProductCardPageContainer>
      <ProductPageMainContainer>
        <GalleryContainer>
          <ImageContainer>
            <MainImage src={product.imgUrl} alt={product.title} />
          </ImageContainer>
        </GalleryContainer>

        <ProductInfoContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>
              <strong>Описание:</strong> {product.description}
          </ProductDescription>

          <PriceAndCartContainer>
            <ProductPrice>{product.price} ₽</ProductPrice>
           
            <ProductForm>
              <label htmlFor="quantity">Количество:</label>
              <InputQuantity
                type="number"
                id="quantity"
                value={count}
                onChange={handleQuantityChange}
                min="1"
              />
            </ProductForm>
          </PriceAndCartContainer>

          <ButtonWrapper>
            <Button width="100%" onClick={handleAddToCart}>
              В корзину
            </Button>
          </ButtonWrapper>

          <ProductDescription>{product.desc}</ProductDescription>
        </ProductInfoContainer>
      </ProductPageMainContainer>
    </ProductCardPageContainer>
  );
};



// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useMatch, useParams } from "react-router-dom";
// import { addProductToCart, loadProductAsync } from "../../action";
// import { selectProduct, selectUserId } from "../../selectors";

// import { ProductCartForm } from "./component/product-form/product-form";
// import {
//   GalleryContainer,
//   MainImage,
//   ProductInfoContainer,
//   ProductPageMainContainer,
//   ProductTitle,
//   ProductDescription,
//   PriceAndCartContainer,
//   ProductPrice,
//   ProductCardPageContainer,
//   ProductForm,
//   InputQuantity,
//   ImageContainer,
//   ButtonWrapper,
// } from "./style";
// import { Button } from "../../components";

// export const ProductCardPage = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [count, setCount] = useState(1);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const product = useSelector(selectProduct);
//   const userId = useSelector(selectUserId);
//   const isEditing = useMatch("/products/:id/edit");

//   useEffect(() => {
//     const loadProduct = async () => {
//       setIsLoading(true);
//       const productData = dispatch(loadProductAsync(id));
//       if (productData.error) {
//         setError(productData.error);
//       }
//       setIsLoading(false);
//     };

//     loadProduct();
//   }, [dispatch, id, userId]);

//   const handleQuantityChange = (event) => {
//     const value = Number(event.target.value);
//     let newQuantity = value;
//     if (!isNaN(newQuantity) && newQuantity >= 0) {
//       setCount(newQuantity);
//     } else {
//       setCount(0);
//     }
//     return newQuantity;
//   };

//   const handleAddToCart = () => {

//     const productId = product.id;
//     dispatch(addProductToCart(productId, count, userId));
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   return (
//     <ProductCardPageContainer>
//       {isEditing ? (
//         <ProductCartForm key={product.id} product={product} />
//       ) : (
//         <>
//           <ProductPageMainContainer>
//             <GalleryContainer>
//               <ImageContainer>
//                 <MainImage src={product.imgUrl} alt={product.title} />
//               </ImageContainer>
//             </GalleryContainer>
//             <ProductInfoContainer>
//               <ProductTitle>
//                 {product.title}
//               </ProductTitle>

//               <PriceAndCartContainer>
//                 <div>
//                   <ProductPrice>{product.price} ₽</ProductPrice>
//                 </div>
//                 <ProductForm>
//                   <label htmlFor="quantity">Количество :</label>
//                   <InputQuantity
//                     type="number"
//                     id="quantity"
//                     value={count}
//                     onChange={handleQuantityChange}
//                     min="1"
//                   />
//                 </ProductForm>
//               </PriceAndCartContainer>
//               <div>
//                 <ButtonWrapper>
//                   <Button
//                     width="150px"
//                     onClick={() => handleAddToCart(product, userId)}
//                     >
//                     В корзину
//                   </Button>
//                 </ButtonWrapper>
                  
//               </div>
//               <ProductDescription>{product.desc}</ProductDescription>
//             </ProductInfoContainer>
//           </ProductPageMainContainer>
//         </>
//       )}
//     </ProductCardPageContainer>
//   );
// };
