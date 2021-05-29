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

export const addOrderList = (dispatch) => (data) => {
  orderService.addOrderToList(data).then((resp) => {
    dispatch({
      type: actionTypes.CREATE_ORDER_LIST,
      payload: data,
    });
  });
};
