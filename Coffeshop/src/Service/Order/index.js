import { HttpClient } from "../../HttpClient";

class OrderService extends HttpClient {
  constructor() {
    super("https://60a8e41820a6410017306677.mockapi.io/api");
  }

  getOrderList() {
    return this.get("orderListCrud");
  }

  addOrderToList(body) {
    return this.post("orderListCrud", body);
  }

  putOrderList(id, body) {
    return this.put("orderListCrud", id, body);
  }
}

export const orderService = new OrderService();
