import { HttpClient } from "../../HttpClient";

class CoffeList extends HttpClient {
  constructor() {
    super("https://isko88.github.io");
  }

  getCoffeList() {
    return this.get("coffee.json");
  }
}

export const coffeListService = new CoffeList();
