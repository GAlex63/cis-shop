import { ACTION_TYPE } from "./action-type";
export const setCart = (cart) => { 
  return {
    type: ACTION_TYPE.SET_CART_DATA,
    payload: cart,
  };
};

