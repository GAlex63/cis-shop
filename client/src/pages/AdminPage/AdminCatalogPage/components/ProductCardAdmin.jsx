import { ButtonGroup } from "@mui/material";
import { CardContainer, ProductDetail, ProductImage, ProductInfo, ProductTitle } from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components"; 


const ProductCardAdmin = ({ product, onEdit, onDelete }) => {
const { id } = product
const navigate = useNavigate()

const handleClick = () => {
  navigate(`/products/${id}/`);
}
  return (
    <CardContainer>
      <ProductImage src={product.imgUrl} alt={product.title} />
      <ProductInfo>
       
        <ProductTitle onClick={handleClick} >{product.title}</ProductTitle>
        
        
        <ProductDetail>
          <strong>ID товара:</strong> {product.id}
        </ProductDetail>
        <ProductDetail>
          <strong>Категория:</strong> {product.category_name}
        </ProductDetail>
        <ProductDetail>
          <strong>Цена:</strong> {product.price} руб.
        </ProductDetail>
      </ProductInfo>
      <ButtonGroup>
        <Button onClick={() => onEdit(id)} variant="edit" height="36px" >Редактировать</Button>
        <Button onClick={() => onDelete(id)} variant="danger" height="36px" style={{ marginLeft: "12px"}}>Удалить</Button>
      </ButtonGroup>
    </CardContainer>
  );
};

export default ProductCardAdmin;
