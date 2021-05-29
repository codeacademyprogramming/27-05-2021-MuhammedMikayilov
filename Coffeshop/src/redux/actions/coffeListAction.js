import { coffeListService } from "../../Service/CoffeShop";
import * as actionTypes from "./actionTypes";

const getCoffeList = () => (dispatch) => {
  coffeListService.getCoffeList().then(({ data }) => {
    dispatch({
      type: actionTypes.GET_COFFE_LIST,
      payload: data,
    });
  });
};

export default getCoffeList;
