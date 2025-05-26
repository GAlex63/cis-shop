import { request } from "../utils/request";
import { setCart } from "./set-cart";

export const loadCartAsync = (userId) => async (dispatch) => {
  console.log("loadCartAsync вызван с userId", userId);
  try {
    console.log("Делаем запрос к carts", userId);
    const data = await request(`/cart`, "GET");
    console.log("Ответ сервера:", data);
    if (data && data.cart) {
      dispatch(setCart({ items: data.cart }));
    } else {
      console.error("Ошибка: данные о корзинах отсутствуют в ответе:", data);
      dispatch(setCart({ items: [] }));
    }
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};
