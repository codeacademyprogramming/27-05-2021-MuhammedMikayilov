import { orderService } from "../../Service/Order";
import * as actionTypes from "./actionTypes";

const getOrderList = (loading) => (dispatch) => {
  loading(true);
  orderService
    .getOrderList()
    .then(({ data }) => {
      dispatch({
        type: actionTypes.GET_ORDER_LIST,
        payload: data,
      });
    })
    .then(() => loading(false));
};

export default getOrderList;

export const addOrderList = (dispatch) => (data) => {
  orderService
    .addOrderToList(data)
    .then((resp) => {
      dispatch({
        type: actionTypes.CREATE_ORDER_LIST,
        payload: data,
      });
    })
    .then(() => dispatch(getOrderList()));
};

export const updateOrderItem = (dispatch) => (id, data, loading) => {
  orderService
    .putOrderList(id, data)
    .then(() => {
      dispatch({
        type: actionTypes.UPDATE_STATUS,
        payload: data,
      });
    })
    .then(() => dispatch(getOrderList(loading)))
    .catch((err) => console.log(err));
};
export const updateOrder = (dispatch) => (id, data, setLoading) => {
  orderService
    .putOrderList(id, data)
    .then(() => {
      dispatch({
        type: actionTypes.UPDATE_ORDER_LIST,
        payload: data,
      });
    })
    .then(() => dispatch(getOrderList(setLoading)))
    .catch((err) => console.log(err));
};
