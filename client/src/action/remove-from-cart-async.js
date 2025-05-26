import { request } from "../utils/request";
import { removeFromCart } from "./remove-from-cart";

export const removeFromCartAsync = (productId) => (dispatch) => {
  request(`/cart/${productId}`, "DELETE").then(() => {
    dispatch(removeFromCart(productId));
  });
};
