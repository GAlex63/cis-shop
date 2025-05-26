import { request } from "../utils/request";
import { setProductData } from "./set-product-data";

export const saveProductAsync = (id, newProductData) => async (dispatch) => {
  const saveRequest = id
    ? await request(`/products/${id}`, "PATCH", newProductData)
    : await request("/products", "POST", newProductData);

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
