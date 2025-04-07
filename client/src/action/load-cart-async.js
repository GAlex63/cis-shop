import { request } from "../utils/request";
import { setCart } from "./set-cart";


export const loadCartAsync = (userId) => async (dispatch) => {
    try {
        const data = await request(`/api/carts/${userId}`, 'GET');
        if (data && data.cart) {
            dispatch(setCart({ items: data.cart }));
        } else {
            console.error('Ошибка: данные о корзинах отсутствуют в ответе:', data);
        }
    } catch (error) {
        console.error('Ошибка при загрузке фаворитов:', error);
    }
  };
