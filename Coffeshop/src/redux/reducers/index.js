import { combineReducers } from "redux";

import orederReducer from "./orderReducer";
import coffeeListReducer from "./coffeList";

const reducer = combineReducers({
  coffeList: coffeeListReducer,
  order: orederReducer,
});

export default reducer;
