import { request } from "../utils/request";
import { setCart } from "./set-cart";

export const addProductToCart = (productId, count, userId, ) => async (dispatch) => {

    try {
      const response = await request('/api/cart', 'POST', { productId,count, userId });
      dispatch(setCart(response.cartItem)); 
    } catch (error) {
      console.error('Ошибка добавления товара в корзину:', error);
    }
  };

