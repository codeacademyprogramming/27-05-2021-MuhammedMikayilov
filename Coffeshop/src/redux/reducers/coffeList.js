import * as actionTypes from "../actions/actionTypes";

const coffeeListReducer = (state = { coffees: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFE_LIST:
      return { ...state.coffees, coffees: action.payload };
    default:
      return state;
  }
};

export default coffeeListReducer;
