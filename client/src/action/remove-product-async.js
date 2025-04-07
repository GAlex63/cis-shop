import { request } from "../utils/request";


export const removeProductAsync = (id) => () =>
    request(`/api/products/${id}`, "DELETE")
