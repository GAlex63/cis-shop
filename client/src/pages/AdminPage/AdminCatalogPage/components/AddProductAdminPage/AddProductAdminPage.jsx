import { useNavigate } from "react-router-dom";
import { Button, Input, PrivateContent, H2 } from "../../../../../components";
import { request } from "../../../../../utils/request";
import { AddProductAdminContainer, FormField, Select, ErrorMessage, ImagePreview, DropZone, FormWrapper, ButtonWrapper } from "./style"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../../../../selectors";
import { checkAccess } from "../../../../../utils";
import { ROLE } from "../../../../../constans";


export const AddProductAdminPage = () => {
    const navigate = useNavigate(); 
    const userRole = useSelector(selectUserRole);
  
  // const [roles, setRoles] = useState([])
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [imagePreview, setImagePreview] = useState(null)
    const [productData, setProductData] = useState({
      img_url: "",
      title: "",
      price: "",
      category_id: "",
      description: "",
    });
  

    useEffect(() => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
          return;
        }

        request("/categories")
    .then((res) => {
      if (res.error) return setError(res.error);
      setCategories(res.data);
    })
    .catch(() => setError("Не удалось загрузить категории"));
      }, [userRole]);
  
    const handleChange = (field, value) => {
      setProductData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageDrop = (e) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      readFile(file)
    }

    const handleImageSelect = (e) => {
      const file = e.targer.file[0]
      readFile(file)
    }

    const readFile = (file) => {
      if (!file || !file.type.startWith('image/')) return;
      const reader = new FileReader()
      reader.onloadend = () => {
        setProductData((prev) => ({ ...prev, img_url: reader.result }))
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!checkAccess([ROLE.ADMIN], userRole)) {
        return;
      }
      try {
         const response = await request('/products', 'POST', { product: productData });
  
        if (response.error) {
          setError(response.error);
        } else {
          navigate('/catalog'); 
        }
      } catch (error) {
        console.error('Ошибка при сохранении товара:', error);
        setError('Ошибка при сохранении товара');
      }
    };
  
    return (
      <AddProductAdminContainer>
          <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
      <form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormField>

      <H2>Форма добавления нового товара</H2>
      <Input
        width="95%"
        placeholder="Название"
        value={productData.title}
        onChange={(e) => handleChange("title", e.target.value)}
      />
      </FormField>

      <FormField>
        <DropZone onDrop={handleImageDrop}
        onDragOver={(e) => e.preventDefault()}
        >
        <p>Перетащите изображение сюда или фыберите файл</p>
        <input type="file" accept='image/' onChange={handleImageSelect} />
        </DropZone>
        {imagePreview && <imagePreview src={imagePreview} alt='Предпросмотр'/>}
      </FormField>

      {/* <FormField>
      <Input
        width="95%"
        placeholder="Картинка"
        value={productData.img_url}
        onChange={(e) => handleChange("img_url", e.target.value)}
      />
      </FormField> */}

      <FormField>
      <Input
        width="95%"
        placeholder="Цена"
        value={productData.price}
        onChange={(e) => handleChange("price", e.target.value)}
      />
      </FormField>
     
     <FormField>
     <Select
        value={productData.category_id}
        onChange={(e) => handleChange("category_id", e.target.value)}
      >
        <option value="">Выбери категорию</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </Select>
      </FormField>  

      <FormField>   
      <Input
        width="95%"
        placeholder="Описание"
        value={productData.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />
      </FormField>
        <ButtonWrapper>
      <Button type="submit">Добавить</Button>
        </ButtonWrapper>
      {error}
    </form>
    </PrivateContent>
    </AddProductAdminContainer>
    
  );
}