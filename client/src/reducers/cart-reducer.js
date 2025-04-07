import { ACTION_TYPE } from "../action";

const initialState = {
  cart: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CART_DATA:
      return {
        ...state,
        cart: action.payload.items,

      };
    case ACTION_TYPE.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ACTION_TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.items.filter(item => item.id !== action.payload),
      }
    case ACTION_TYPE.CLEAR_CART:
      return {
        ...state,
        cart: [],
      }
    default:
      return state;
  }
};