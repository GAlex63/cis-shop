import { useEffect, useState } from "react";
import { loadProductAsync, saveProductAsync } from "../../../../action";
import {
  ProductCardPageContainer,
  ProductPageMainContainer,
} from "../../style";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../../../../components";
import { ButtonWrapper } from "../../../AdminPage/AdminCatalogPage/components/AddProductAdminPage/style";

export const ProductCartForm = () => {
  const [imgUrlValue, setImgUrlValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    dispatch(loadProductAsync(id))
      .then((productData) => {
        if (!productData) throw new Error("Нет данных продукта");
        setImgUrlValue(productData.imgUrl);
        setTitleValue(productData.title);
        setPriceValue(productData.price);
        setDescValue(productData.desc);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке данных:", err);
        setError(err.message || "Ошибка загрузки");
      })
      .finally(() => setIsLoading(false));
  }, [id, dispatch]);

  const onSave = async () => {
    try {
        dispatch(
        saveProductAsync(id, {
          imgUrl: imgUrlValue,
          title: titleValue,
          desc: descValue,
          price: priceValue,
        })
      );
      navigate(`/products/${id}`);
    } catch (err) {
      setError("Ошибка при сохранении товара");
    }
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ProductCardPageContainer>
      <ProductPageMainContainer>
        <Input width="95%" placeholder="Ссылка на изображение" value={imgUrlValue} onChange={(e) => setImgUrlValue(e.target.value)} />
        <Input width="95%" placeholder="Название" value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
        <Input width="95%" placeholder="Описание" value={descValue} onChange={(e) => setDescValue(e.target.value)} />
        <Input width="95%" placeholder="Цена" value={priceValue} onChange={(e) => setPriceValue(e.target.value)} />
        <ButtonWrapper>
        <Button onClick={onSave}>Сохранить изменения</Button>
        </ButtonWrapper>
      </ProductPageMainContainer>
    </ProductCardPageContainer>
  );
};
