import { HttpClient } from "../../HttpClient";

class OrderService extends HttpClient {
  constructor() {
    super("https://60a8e41820a6410017306677.mockapi.io/api");
  }

  getOrderList() {
    return this.get("orders");
  }

  addOrderToList(body) {
    return this.post("orders", body);
  }
}

export const orderService = new OrderService();
