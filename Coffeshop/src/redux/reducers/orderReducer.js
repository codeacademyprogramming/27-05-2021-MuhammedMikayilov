import * as actionTypes from "../actions/actionTypes";

const initial = {
  status: "",
};

const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_LIST:
      return { ...state.orders, orders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
