import { ACTION_TYPE } from "../action";


const initialOrderState = {
  order: {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    deliveryMethod: "",
    city: "",
    street: "",
    number: "",
    commentOrder: "",
    userId: "",
    createdAt: ""
  }
      
};

export const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_ORDER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_TYPE.ADD_NEW_ORDER:
      return {
        ...state,
        order: { 
          ...state.order, 
          ...action.payload
      }
    };
    default:
      return state;
  }
};