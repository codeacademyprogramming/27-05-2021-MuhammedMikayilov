import { createStore, applyMiddleware } from "redux";
import reduxThunkMiddleware from "redux-thunk";
import reducer from "../reducers";

const middlewares = applyMiddleware(reduxThunkMiddleware);

function configureStore() {
  return createStore(reducer, middlewares);
}

export default configureStore;
