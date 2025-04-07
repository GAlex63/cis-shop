import { ACTION_TYPE } from "./action-type";

export const removeFromCart = (cartId) => {
    return {
      type: ACTION_TYPE.REMOVE_FROM_CART,
      payload: cartId,
    };
  };