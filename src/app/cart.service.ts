import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private http: HttpClient) {}
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  onDeleteItem(id: number) {
    const newItems = this.items.filter((item) => item.id !== id);
    this.items = newItems;
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
}
