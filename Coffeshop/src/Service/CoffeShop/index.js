import { HttpClient } from "../../HttpClient";

class CoffeList extends HttpClient {
  constructor() {
    super("https://60a8e41820a6410017306677.mockapi.io/api");
  }

  getCoffeList() {
    return this.get("coffeshop");
  }
}

export const coffeListService = new CoffeList();
