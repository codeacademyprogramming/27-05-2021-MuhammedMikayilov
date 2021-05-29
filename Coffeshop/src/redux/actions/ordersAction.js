import { orderService } from "../../Service/Order";
import * as actionTypes from "./actionTypes";

const getOrderList = () => (dispatch) => {
  orderService.getOrderList().then(({ data }) => {
    dispatch({
      type: actionTypes.GET_ORDER_LIST,
      payload: data,
    });
  });
};

export default getOrderList;
