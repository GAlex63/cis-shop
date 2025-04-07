import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PrivateContent } from "../../../components";
import { selectUserRole } from "../../../selectors/select-user-role";
import { checkAccess } from "../../../utils/check-access";
import { ROLE } from "../../../constans/role";
import {
  AdminOrdersPageContainer,
  HeaderRow,
  OrderPageTitle,
  Table,
  TableRow,
} from "./style";
import { request } from "../../../utils/request";

export const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldUpdateOrderList, setShouldUpdateOrderList] = useState(false);
  const userRole = useSelector(selectUserRole);

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return;
    }
    Promise.all([request("/api/orders"), request("/api/users/roles")]).then(
      ([ordersRes, rolesRes]) => {
        if (ordersRes.error || rolesRes.error) {
          setErrorMessage(ordersRes.error || rolesRes.error);
          return;
        }
        setOrders(ordersRes.orders);
        setRoles(rolesRes.data);
      }
    );
  }, [shouldUpdateOrderList, userRole]);

  const onOrderRemove = (id) => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return;
    }
    request(`/api/orders/${id}`, "DELETE").then(() => {
      setShouldUpdateOrderList(!shouldUpdateOrderList);
    });
  };

  return (
    <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
      <AdminOrdersPageContainer>
        <OrderPageTitle>Заказы</OrderPageTitle>
        <Table>
          <HeaderRow>
            <div>Логин</div>
            <div>Дата заказа</div>
            <div>Сумма заказа</div>
            <div>Действия</div>
          </HeaderRow>
          {orders.map(
            ({
              id,
              userId,
              createdAt,
              firstName,
              lastName,
              number,
              totalAmount,
              commentOrder,
            }) => (
              <TableRow key={id}>
                <div>{`${firstName} ${lastName}` || userId}</div>
                <div>{new Date(createdAt).toLocaleDateString()}</div>
                <div>{`${number}`}</div>
                <div>{`${totalAmount}`} </div>
                <div>{`${commentOrder}`} </div>
                <div>
                  <button onClick={() => onOrderRemove(id)}>Удалить</button>
                </div>
              </TableRow>
            )
          )}
        </Table>
        {orders.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Заказов пока нет.
          </p>
        )}
      </AdminOrdersPageContainer>
    </PrivateContent>
  );
};
