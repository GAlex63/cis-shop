import { ACTION_TYPE } from "../action";

const initialProductState = {
  id: "",
  title: "",
  img_url: "",
  category: "",
  price: 0,
  desc: "",
  createdAt: "",
};
export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCT_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPE.RESET_PRODUCT_DATA:
      return initialProductState;

    default:
      return state;
  }
};
