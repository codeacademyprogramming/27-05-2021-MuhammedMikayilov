import * as actionTypes from "../actions/actionTypes";

const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_LIST:
      return { ...state.orders, orders: action.payload };
    case actionTypes.CREATE_ORDER_LIST:
      return {
        ...state.orders,
        orders: [...state.orders, action.payload],
      };
    case actionTypes.UPDATE_STATUS:
      return {
        ...state.orders,
        orders: state.orders.map((order) => {
          if (order.id === action.payload.id) {
            return {
              ...action.payload,
              status: action.payload,
            };
          }
          return order;
        }),
      };
    case actionTypes.UPDATE_ORDER_LIST:
      return {
        ...state.orders,
        orders: state.orders.map((order) => {
          if (order.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return { ...order };
        }),
      };
    default:
      return state;
  }
};

export default orderReducer;
