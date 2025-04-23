import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Title } from "../../../../components";
import { useState } from "react";
import { Container } from "../../style";
import {
  FormSection,
  ModalContent,
  ModalOverlay,
  OrderSummary,
  SectionContact,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../../../selectors";
import { addNewOrder, clearCartonServer} from "../../../../action";


export const OrderPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false)
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });
  const [commentData, setCommentData] = useState({
    number: "",
    comment_order: "",
  });
  const userId = useSelector(selectUserId)
const navigate = useNavigate();
const dispatch = useDispatch()
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  const handleContactChange = (field, value) => {
    setContactData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCommentChange = (field, value) => {
    setCommentData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const comment = commentData.comment_order || "Комментарий отсутствует";
    const orderData = {
      ...contactData,
      total_amount: location.state?.totalAmount || 0,
      comment_order: comment,
    };

    dispatch(addNewOrder(orderData));
    dispatch(clearCartonServer(userId))
    setShowModal(true)
  };

  const closeModalAndRedirect = () => {
    setShowModal(false);
    navigate('/'); 
  };
  return (
    <Container>
      <FormSection>
        <Title>Оформление заказа</Title>
        <Title as="h2">Контактные данные</Title>
        <SectionContact>
          <Input
            width="calc(50% - 40px)"
            placeholder="Имя"
            value={contactData.first_name}
            onChange={(e) => handleContactChange("first_name", e.target.value)}
          />
          <Input
            width="calc(50% - 40px)"
            placeholder="Фамилия"
            value={contactData.last_name}
            onChange={(e) => handleContactChange("last_name", e.target.value)}
          />
          <Input
            width="calc(50% - 40px)"
            placeholder="Телефон*"
            value={contactData.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
          />
          <Input
            width="calc(50% - 40px)"
            placeholder="E-mail"
            value={contactData.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
          />
           <Input
              as="textarea"
              placeholder="Комментарий"
              rows="3"
              value={deliveryData.comment_order}
              onChange={(e) =>
                handleCommentChange("comment_order", e.target.value)
              }
            />
        </SectionContact>
      </FormSection>
      <OrderSummary>
        <Button type="button" onClick={() => navigate("/cart")}>
          ← Вернуться в корзину
        </Button>
        <p>количество товаров</p>
        <Title as="h2">{totalAmount}</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button onClick={handleSubmit}>Подтвердить заказ</Button>
        {showModal && (
      <ModalOverlay>
        <ModalContent>
          <h2>Заказ успешно создан!</h2>
          <p>Дождитесь подтверждения оператора.</p>
          <button onClick={closeModalAndRedirect}>На главную</button>
        </ModalContent>
      </ModalOverlay>
    )}
      </OrderSummary>
    </Container>
  );
};
