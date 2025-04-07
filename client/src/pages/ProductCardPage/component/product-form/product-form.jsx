import { useLayoutEffect, useState } from "react";
import { loadProductAsync, saveProductAsync } from "../../../../action";
import {
  ProductCardPageContainer,
  ProductPageMainContainer,
} from "../../style";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../../components";

export const ProductCartForm = ({
  product: { id, imgUrl, title, desc, price },
}) => {
  const [imgUrlvalue, setImgUrlvalue] = useState(imgUrl);
  const [titlevalue, setTitlevalue] = useState(title);
  const [pricevalue, setPricevalue] = useState(price);
  const [descvalue, setDescvalue] = useState(desc);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setIsLoading(true);
    dispatch(loadProductAsync(id))
      .then((data) => {
        console.log("Данные загружены:", data);
        setImgUrlvalue(imgUrl);
        setTitlevalue(title);
        setPricevalue(price);
        setDescvalue(desc);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке данных:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [id, dispatch, imgUrl, title, price, desc]);

  const onSave = () => {
    dispatch(
      saveProductAsync(id, {
        imgUrl: imgUrlvalue,
        title: titlevalue,
        desc: descvalue,
        price: pricevalue,
      })
    ).then((updatedProduct) => {
      console.log(updatedProduct);
      navigate(`/products/${id}`);
    });
  };
  const onImgChange = ({ target }) => setImgUrlvalue(target.value);
  const onTitleChange = ({ target }) => setTitlevalue(target.value);
  const onDescChange = ({ target }) => setDescvalue(target.value);
  const onPriceChange = ({ target }) => setPricevalue(target.value);

  if (isLoading) return <p>Loading...</p>;
  
  if (error) return <p>{error}</p>;
  return (
    <ProductCardPageContainer>
      <ProductPageMainContainer>
        <Input
          width="95%"
          placeholder="картинка"
          value={imgUrlvalue}
          onChange={onImgChange}
        />

        <Input
          width="95%"
          placeholder="Заголовок"
          value={titlevalue}
          onChange={onTitleChange}
        />
        <Input
          width="95%"
          placeholder="Описание"
          value={descvalue}
          onChange={onDescChange}
        />

        <Input
          width="95%"
          placeholder="Цена"
          value={pricevalue}
          onChange={onPriceChange}
        />

        <Button onClick={onSave}> Сохранить изменения</Button>
      </ProductPageMainContainer>
    </ProductCardPageContainer>
  );
};
