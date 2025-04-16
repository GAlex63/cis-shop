import { request } from "../utils/request";
import { setProductData } from "./set-product-data";

export const saveProductAsync = (id, newProductData) => (dispatch) => {
  const saveRequest = id
    ? request(`/products/${id}`, "PATCH", newProductData)
    : request("/products", "POST", newProductData);

  return saveRequest
    .then((updatedProduct) => {
      dispatch(setProductData(updatedProduct.data));
      return updatedProduct.data;
    })
    .catch((error) => {
      console.error("Ошибка при сохранении продукта:", error);
      throw error;
    });
};
