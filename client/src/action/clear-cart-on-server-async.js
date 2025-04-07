import { request } from '../utils/request';
import { clearCart } from './clear-cart';


export const clearCartonServer = (userId) => async (dispatch) => {
  try {
    const response = await request("/api/cart/", 'DELETE', { userId });
    if (response.ok) {
      dispatch(clearCart());
    }
  } catch (error) {
    console.error('Ошибка при очистке карты на сервере:', error.message);
    throw error;
  }
};