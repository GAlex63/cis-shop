import { useNavigate } from "react-router-dom";
import { AdminItem, AdminItemsSection, AdminPageContainer } from "./style";

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <AdminPageContainer>
      <AdminItemsSection>
        <AdminItem onClick={() => navigate("/catalog")}>Все товары</AdminItem>
        <AdminItem onClick={() => navigate("/users")}>
          Все пользователи
        </AdminItem>
        <AdminItem onClick={() => navigate("/orders")}>Все заказы</AdminItem>
      </AdminItemsSection>
    </AdminPageContainer>
  );
};
