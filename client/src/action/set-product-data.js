import { ACTION_TYPE } from "./action-type";

export const setProductData = (payload) => ({
  type: ACTION_TYPE.SET_PRODUCT_DATA,
  payload,
});
